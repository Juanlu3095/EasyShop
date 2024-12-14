import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido, Pedidoitem } from '../../models/pedido';
import { Usuario } from '../../models/usuario';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { TableButton } from '../../models/tablebutton';
import { DialogService } from '../../services/dialog.service';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-micuenta',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TablacompletaComponent, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './micuenta.component.html',
  styleUrl: './micuenta.component.scss'
})
export class MicuentaComponent implements OnInit{

  pedidos: Pedido[];
  pedido: Pedido;
  pedidosItem: Pedidoitem[];
  usuario: Usuario;
  columns: string[] = ['Id', 'Estado', 'Total', 'Fecha'];
  displayedColumns: string[] = [...this.columns, 'acciones'];
  
  @ViewChild('verPedido') modalPedido!: TemplateRef<HTMLElement>;
  @ViewChild('editarUsuario') editarUsuario!: TemplateRef<HTMLElement>;

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Ver', class: '', accion: (id:number) => this.verPedido(id) },
  ]

  usuarioForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required])),
    password_confirmation: new FormControl('', Validators.compose([Validators.required, , this.password_confirmed]))
  })

  constructor(private title: Title,
    private auth: AuthService,
    private pedidoService: PedidosService,
    private cookieService: CookieService,
    private dialogService: DialogService,
    private _snackBar: MatSnackBar,
    private router: Router) {}
 
  ngOnInit(): void {
    this.title.setTitle('Mi cuenta | EasyShop');
    this.obtenerUserData();
    this.obtenerPedidos();

    this.auth.refresh$.subscribe(() => {
      this.obtenerUserData();
    })
  }

  // Cerramos la sesión del usuario
  cerrarsesion() {
    this.dialogService.openSpinner();

    // Función para eliminar el token de la base de datos y del navegador
    this.auth.logoutCliente().subscribe({
      next: (respuesta) => {
        this.cookieService.delete('TOKEN_C', '/'); // Para borrar la cookie, debe ir después de la petición de logout a laravel
        this.dialogService.closeAll();
        this.router.navigate(['/acceso']);
      },
      error: (error) => {
        this.dialogService.closeAll();
        this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  // Abre el modal y actualiza los datos del usuario
  actualizarUsuario() {
    let title: string = `Editar usuario`;
    let btnClass = 'guardar'; // Clase para el botón de aceptar

    this.usuarioForm.patchValue({
      name: this.usuario.Nombre,
      email: this.usuario.Email
    })

    this.dialogService.openDialog(this.editarUsuario, title, btnClass).then((confirm) => {
      if(confirm && this.usuarioForm.valid) {
        this.auth.updateCliente(this.usuarioForm.value).subscribe({
          next: (respuesta) => {
            console.log(respuesta);
            this._snackBar.open('Datos actualizados.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            console.error(error);
            this._snackBar.open('No se ha podido actualizar sus datos.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
      
    })
  }

  // Función que se introducen en los Validators para comprobar que los input password tengan el mismo value
  public password_confirmed(control: AbstractControl): ValidationErrors | null {

    // Usar this.UsuarioForm.value no garantiza que los valores estén actualizados al ejecutar el validador 
    const form = control.parent; // Accede al formulario

    const password = form?.get('password')?.value;
    const password_confirmation = form?.get('password_confirmation')?.value;

    return password === password_confirmation ? null : {bad_password: true}
  }

  // Modal que envía id del pedido por POST para ver el mismo
  verPedido(id: number) {
    this.dialogService.openSpinner();

    let title: string = `Pedido #${id}`;
    let btnClass = 'guardar'; // Clase para el botón de aceptar
    let btnCancel: string = 'no-button';

    // Obtenemos los productos del pedido
    this.pedidoService.getPedidoItemsClient(id).subscribe({
      next: (respuesta) => {
        this.dialogService.closeAll()
        this.pedidosItem = respuesta;
      },
      error: (error) => {
        this.dialogService.closeAll()
        this._snackBar.open('No se ha podido obtener los productos.', 'Aceptar', {
          duration: 3000
        });
      }
    })

    // Obtenemos el pedido
    this.pedidoService.getPedidoClient(id).subscribe({
      next: (respuesta) => {
        this.pedido = respuesta;
        this.dialogService.openDialog(this.modalPedido, title, btnClass, btnCancel)
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener el pedido.', 'Aceptar', {
          duration: 3000
        });
      }
    })

  }

  // Obtenemos los datos del usuario
  obtenerUserData() {
    this.auth.obtenerUser().subscribe({
      next: (respuesta) => {
        if(respuesta.data) {
          this.usuario = respuesta.data
        }
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los datos del usuario.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  // Obtenemos todos los pedidos
  obtenerPedidos() {
    this.pedidoService.getPedidosByUser().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.pedidos = respuesta
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los pedidos.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

}
