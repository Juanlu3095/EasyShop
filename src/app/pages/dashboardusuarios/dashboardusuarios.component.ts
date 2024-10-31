import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TablacompletaComponent } from "../../components/tablacompleta/tablacompleta.component";
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { TableButton } from '../../models/tablebutton';
import { DialogService } from '../../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Rol } from '../../models/rol';

@Component({
  selector: 'app-dashboardusuarios',
  standalone: true,
  imports: [TablacompletaComponent, MatButtonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './dashboardusuarios.component.html',
  styleUrl: './dashboardusuarios.component.scss'
})
export class DashboardusuariosComponent implements OnInit, OnDestroy{

  columns = ['Nombre', 'Email', 'Rol', 'Último_acceso']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  usuarios: Usuario[]; // Array de usuarios que modificamos con getUsuarios()
  usuario: Usuario; // Variable que usaremos para la edición de usuarios
  roles: Rol[]; // Array de roles para la crear y editar los usuarios
  nombreUsuario: string; // Variable que usamos para indicar el nombre del usuario seleccionado para eliminar
  selectedIds: number[] = []; // Array que almacena los id de los usuarios seleccionados para eliminarlos
  suscripcion: Subscription;

  @ViewChild('contentEliminar') modalEliminar!: TemplateRef<HTMLElement>; // El contenido a mostrar en el modal, opcional
  @ViewChild('contentEliminarSeleccion') modalEliminarSeleccion!: TemplateRef<HTMLElement>;
  @ViewChild('contentCrear') modalCrearUsuario!: TemplateRef<HTMLElement>;
  @ViewChild('contentEditar') modalEditarUsuario!: TemplateRef<HTMLElement>;

  UsuarioForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required])),
    password_confirmation: new FormControl('', Validators.compose([Validators.required, , this.password_confirmed])),
    role_id: new FormControl(0, Validators.required)
  })

  constructor(private title: Title, private usuarioService: UsuariosService, private dialogService: DialogService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Usuarios < EasyShop');
    this.getUsuarios();

    this.suscripcion = this.usuarioService.refresh$.subscribe(() => {
      this.getUsuarios();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (Id:number) => this.editarUsuario(Id) }, // HAY QUE USAR RESOURCE PARA QUE DETECTE LA 'Id' QIE ES LO QUE INDICAMOS EN TABLACOMPLETA
    {id: 2, nombre: 'Eliminar', class: 'danger', accion: (Id:number) => this.eliminarUsuario(Id)},
  ]

  // Función que se introducen en los Validators para comprobar que los input password tengan el mismo value
  public password_confirmed(control: AbstractControl): ValidationErrors | null {

    // Usar this.UsuarioForm.value no garantiza que los valores estén actualizados al ejecutar el validador 
    const form = control.parent; // Accede al formulario

    const password = form?.get('password')?.value;
    const password_confirmation = form?.get('password_confirmation')?.value;

    return password === password_confirmation ? null : {bad_password: true}
  }

  getUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  crearUsuario() {
    let title: string = 'Crear usuario'; // Título del modal
    let btnClass = 'confirmar'; // Clase para el botón de aceptar

    // Reiniciamos el formulario
    this.UsuarioForm.reset();

    // Obtenemos los roles
    this.usuarioService.getAllRoles().subscribe({
      next: (respuesta) => {
        this.roles = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })

    this.dialogService.openDialog(this.modalCrearUsuario, title, btnClass).then( (confirm) => {
      if(confirm && this.UsuarioForm.valid) {
        this.usuarioService.postUsuario(this.UsuarioForm.value).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Usuario creado correctamente.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    });
  }

  editarUsuario(id: number) {
    let title: string = 'Editar usuario'; // Título del modal
    let btnClass = 'confirmar'; // Clase para el botón de aceptar

    // Obtenemos el usuario con la id
    this.usuarioService.getUsuario(id).subscribe({
      next: (respuesta) => {
        this.usuario = respuesta;

        this.UsuarioForm.patchValue({
          name: this.usuario.Nombre,
          email: this.usuario.Email,
          role_id: this.usuario.Role_id, // necesitamos obtener la id del rol, ya que lo que se selecciona es el value, que contiene la id
          password: '',
          password_confirmation: ''
        });

        let password = this.UsuarioForm.value.password;
        let password_confirmation = this.UsuarioForm.value.password_confirmation;

        // Obtenemos los roles
        this.usuarioService.getAllRoles().subscribe({
          next: (respuesta) => {
            this.roles = respuesta;
          },
          error: (error) => {
            console.error(error);
          }
        })

        // Abrimos el dialog
        this.dialogService.openDialog(this.modalEditarUsuario, title, btnClass).then( (confirm) => {

          // Si se pulsa en el botón confirmar para guardar el usuario
          if(confirm && this.UsuarioForm.valid && password === password_confirmation) { // Comprobamos que el form sea válido y que las constraseñas coincidan
            this.usuarioService.updateUsuario(id, this.UsuarioForm.value).subscribe({
              next: (respuesta) => {
                this._snackBar.open('Usuario modificado correctamente.', 'Aceptar', {
                  duration: 3000
                });
              },
              error: (error) => {
                this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
                  duration: 3000
                });
              }
            })
          } else {
            return;
          }
        });
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  eliminarUsuario(id: number) {
    let title: string = 'Eliminar usuario'; // Título del modal
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    // Obtenemos el usuario
    this.usuarioService.getUsuario(id).subscribe({
      next: (respuesta: Usuario) => {
        this.nombreUsuario = respuesta.Nombre;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.dialogService.openDialog(this.modalEliminar, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.usuarioService.deleteUsuario(id).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Usuario eliminado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    });
  }

   // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox, necesario para eliminar lo seleccionado
   onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  eliminarSeleccionUsuarios() { //CORREGIR ESTO: NO LO ELIMINA TODO!!!
    let title = 'Eliminar usuarios seleccionados';
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.modalEliminarSeleccion, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.usuarioService.deleteUsuario(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Usuarios eliminados.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    })
  }
}
