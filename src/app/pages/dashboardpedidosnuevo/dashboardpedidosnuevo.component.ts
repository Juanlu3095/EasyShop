import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidosService } from '../../services/pedidos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { MetodospagoService } from '../../services/metodospago.service';
import { Usuario } from '../../models/usuario';
import { Metodopago } from '../../models/metodopago';
import { Estadopedido } from '../../models/estadopedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardpedidosnuevo',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardpedidosnuevo.component.html',
  styleUrl: './dashboardpedidosnuevo.component.scss'
})
export class DashboardpedidosnuevoComponent implements OnInit{

  usuarios: Usuario[];
  metodospago: Metodopago[];
  estadospedido: Estadopedido[];

  constructor(
    private pedidoService: PedidosService,
    private userService: UsuariosService,
    private metodopagoService: MetodospagoService,
    private _snackBar: MatSnackBar,
    private title: Title,
    private router: Router
  ) {}

  crearpedidoForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.required),
    apellidos: new FormControl<string>('', Validators.required),
    cuenta_cliente: new FormControl<number | null>(null, Validators.min(1)),
    pais: new FormControl<string>('', Validators.compose([Validators.minLength(1), Validators.required])),
    direccion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    codigo_postal: new FormControl<number | null>(null, Validators.compose([Validators.minLength(5), Validators.required])),
    poblacion: new FormControl<string>('', Validators.compose([Validators.minLength(1), Validators.required])),
    provincia: new FormControl<string>('', Validators.compose([Validators.minLength(1), Validators.required])),
    telefono: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    email: new FormControl<string>('', Validators.compose([Validators.email, Validators.required])),
    notas: new FormControl<string>('', Validators.minLength(1)),
    metodo_pago: new FormControl<string | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    estado: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    nombre_descuento: new FormControl<string | null>(null, Validators.minLength(1)),
    tipo_descuento: new FormControl<string | null>(null, Validators.minLength(1)),
    descuento: new FormControl<number | null>(null, Validators.min(1)),
  });

  ngOnInit(): void {
    this.title.setTitle('Nuevo pedido < EasyShop');

    this.getUsers();
    this.getMetodopagos();
    this.getEstadosPedido();
  }

  // Creamos el pedido con los datos del usuario y luego lo redirigimos a la página para editar los productos del pedido
  crearPedido() {
    if(this.crearpedidoForm.valid) {
      this.pedidoService.postPedidoAdmin(this.crearpedidoForm.value).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Pedido creado.', 'Aceptar', {
            duration: 3000
          });
          this.router.navigate(['dashboard/pedidos/', respuesta.data]);
        },
        error: (error) => {
          this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    }
  }

  // Obtener usuarios para el select del form
  getUsers() {
    this.userService.getAllUsuarios().subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los usuarios.', 'Reintentar', {
          duration: 3000
        }).onAction().subscribe(() => { // Permitimos al usuario reintentar la carga de usuarios al pulsar en el botón
          this.getUsers()
        });
      }
    })
  }

  // Obtener métodos de pago para el select del form
  getMetodopagos() {
    this.metodopagoService.getMetodosPagoDisponibles().subscribe({
      next: (respuesta) => {
        console.log(respuesta)
        this.metodospago = respuesta.data
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los metodos de pago.', 'Reintentar', {
          duration: 3000
        }).onAction().subscribe(() => {
          this.getMetodopagos()
        });
      }
    })
  }

  // Obtener estados de pedido para el select del form
  getEstadosPedido() {
    this.pedidoService.getEstados().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.estadospedido = respuesta.data;
        
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los estados.', 'Reintentar', {
          duration: 3000
        }).onAction().subscribe(() => {
          this.getEstadosPedido()
        });
      }
    })
  }
}
