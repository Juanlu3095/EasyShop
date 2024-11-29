import { Component, OnInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pedido, Pedidoitem } from '../../models/pedido';
import { PedidosService } from '../../services/pedidos.service';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { Metodopago } from '../../models/metodopago';
import { MetodospagoService } from '../../services/metodospago.service';
import { Estadopedido } from '../../models/estadopedido';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';

@Component({
  selector: 'app-dashboardpedidoseditar',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, ReactiveFormsModule, FormsModule, TablacompletaComponent],
  templateUrl: './dashboardpedidoseditar.component.html',
  styleUrl: './dashboardpedidoseditar.component.scss'
})
export class DashboardpedidoseditarComponent implements OnInit{

  pedido: Pedido;
  usuarios: Usuario[];
  metodospago: Metodopago[];
  estadospedido: Estadopedido[];
  productosPedido: Pedidoitem[];
  idPedido: number = 0;

  editarpedidoForm = new FormGroup({
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
    metodo_pago: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    estado: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    nombre_descuento: new FormControl<string | null>(null, Validators.minLength(1)),
    tipo_descuento: new FormControl<string | null>(null, Validators.minLength(1)),
    descuento: new FormControl<number | null>(null, Validators.min(1)),
  });

  constructor(
    private pedidoService: PedidosService,
    private userService: UsuariosService,
    private metodopagoService: MetodospagoService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private title: Title,
  ) {
    this.idPedido = Number(this.activatedRoute.snapshot.paramMap.get('id')) ?? null
  }

  ngOnInit(): void {
    this.getUsers();
    this.getMetodopagos();
    this.getEstadosPedido();
    this.getPedido();
    this.getPedidoItems(this.idPedido);
    this.title.setTitle('Editar pedido < EasyShop')
  }

  getPedido() {
    this.pedidoService.getPedido(this.idPedido).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.pedido = respuesta
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  getPedidoItems(idPedido: number) {

  }

  getEstadosPedido() {
    this.pedidoService.getEstados().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.estadospedido = respuesta.data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  getUsers() {
    this.userService.getAllUsuarios().subscribe({
      next: (respuesta) => {
        console.log(respuesta)
        this.usuarios = respuesta
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  getMetodopagos() {
    this.metodopagoService.getMetodosPagoDisponibles().subscribe({
      next: (respuesta) => {
        console.log(respuesta)
        this.metodospago = respuesta.data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }


}
