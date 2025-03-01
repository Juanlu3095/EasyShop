import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
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
import { DialogService } from '../../services/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { Metodopago } from '../../models/metodopago';
import { MetodospagoService } from '../../services/metodospago.service';
import { Estadopedido } from '../../models/estadopedido';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { TableButton } from '../../models/tablebutton';
import { Subscription } from 'rxjs';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../models/product';
import { MetodosenvioService } from '../../services/metodosenvio.service';
import { Metodoenvio } from '../../models/metodoenvio';

@Component({
  selector: 'app-dashboardpedidoseditar',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, ReactiveFormsModule, FormsModule, TablacompletaComponent],
  templateUrl: './dashboardpedidoseditar.component.html',
  styleUrl: './dashboardpedidoseditar.component.scss'
})
export class DashboardpedidoseditarComponent implements OnInit, OnDestroy{

  pedido: Pedido;
  usuarios: Usuario[];
  metodospago: Metodopago[];
  metodosenvio: Metodoenvio[];
  estadospedido: Estadopedido[];
  productosPedido: Pedidoitem[];
  productoPedido: Pedidoitem; // Para el modal para eliminar un producto del pedido
  idPedido: number;
  nombreProducto: string; // Para el dialog de eliminar producto del pedido
  productos: Product[]; // Para seleccionar los productos a añadir o editar del pedido
  selectedIds: number[] = [];
  suscripcion: Subscription;

  columns = ['Producto', 'Subtotal', 'Cantidad', 'Total']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones

  @ViewChild('contentNuevo') nuevoProductoModal!: TemplateRef<HTMLElement>
  @ViewChild('contentEditar') editarProductoModal!: TemplateRef<HTMLElement>
  @ViewChild('contentEliminar') eliminarProductoModal!: TemplateRef<HTMLElement>
  @ViewChild('contentEliminarSeleccion') eliminarSeleccionProductoModal!: TemplateRef<HTMLElement>

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.editarPedidoItem(id) },
    {id: 2, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.openDialogEliminarPedidoItem(id)},
  ]

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
    metodo_pago: new FormControl<string | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    estado: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.min(1)])),
    nombre_descuento: new FormControl<string | null>(null, Validators.minLength(1)),
    tipo_descuento: new FormControl<string | null>(null, Validators.minLength(1)),
    descuento: new FormControl<number | null>(null, Validators.min(1)),
    metodo_envio: new FormControl<number>(1, Validators.compose([Validators.required, Validators.min(1)])),
    gastos_envio: new FormControl<number>(0, Validators.compose([Validators.min(0), Validators.required])),
  });

  nuevoProductoPedidoForm = new FormGroup({
    producto_id: new FormControl<number>(0, Validators.compose([Validators.required, Validators.min(1)])),
    subtotal: new FormControl<number | null>(null, Validators.min(1)) || null,
    cantidad: new FormControl<number>(1, Validators.compose([Validators.required, Validators.min(1)])),
  })

  editarProductoPedidoForm = new FormGroup({
    producto_id: new FormControl<number>(0, Validators.compose([Validators.required, Validators.min(1)])),
    subtotal: new FormControl<number | null>(null, Validators.min(1)) || null,
    cantidad: new FormControl<number>(1, Validators.compose([Validators.required, Validators.min(1)])),
  })

  constructor(
    private pedidoService: PedidosService,
    private userService: UsuariosService,
    private metodopagoService: MetodospagoService,
    private metodoenvioService: MetodosenvioService,
    private productoService: ProductosService,
    private dialogService: DialogService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private title: Title,
  ) {
    this.idPedido = Number(this.activatedRoute.snapshot.paramMap.get('id')) ?? null;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getMetodopagos();
    this.getMetodosenvio();
    this.getEstadosPedido();
    this.getPedido();
    this.getPedidoItems();
    
    this.title.setTitle('Editar pedido < EasyShop');

    this.suscripcion = this.pedidoService.refresh$.subscribe(() => {
      this.getPedido(); // Lo necesitamos para que se actualice el subtotal, total y descuento
      this.getPedidoItems();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

  // Envía el email con los datos del pedido y el pago al cliente. 
  // Sirve tanto para pedidos con método de pago transferencia bancaria directa y pago con tarjeta
  enviarEmail() {
    this.pedidoService.enviarEmailPedido(this.idPedido).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Email enviado.', 'Aceptar', {
          duration: 3000
        });
      },
      error: (error) => {
        this._snackBar.open('No se ha podido enviar el email.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  // Edita el pedido, no los items
  editarPedido() {
    if(this.editarpedidoForm.valid) {
      this.pedidoService.updatePedido(this.idPedido, this.editarpedidoForm.value).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Pedido actualizado.', 'Aceptar', {
            duration: 3000
          });
        },
        error: (error) => {
          this._snackBar.open('No se ha podido editar el pedido.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    }
    
  }

  // Editar producto del pedido
  editarPedidoItem(id: number) {
    let title: string = 'Editar producto del pedido'; // Título del modal
    let btnClass = 'guardar'; // Clase para el botón de aceptar
    this.getProductos();

    // Obtenemos la marca con la id que pasamos por parámetro
    this.pedidoService.getPedidoItemById(id).subscribe({
      next: (respuesta) => {
        this.productoPedido = respuesta;
        
        // Inyectamos los valores del cupón en el formulario
        this.editarProductoPedidoForm.patchValue({
          producto_id: this.productoPedido.Producto_id,
          cantidad: this.productoPedido.Cantidad
        });
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener el producto.', 'Aceptar', {
          duration: 3000
        });
      }
    });

    this.dialogService.openDialog(this.editarProductoModal, title, btnClass).then( (confirm) => {
      if(confirm) {
        
        this.pedidoService.updatePedidoItem(id, this.editarProductoPedidoForm.value).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Producto editado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('No se ha podido editar el producto.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    });
  }

  nuevoPedidoItem() {
    let title: string = 'Editar producto del pedido'; // Título del modal
    let btnClass = 'guardar'; // Clase para el botón de aceptar
    this.getProductos();

    this.dialogService.openDialog(this.nuevoProductoModal, title, btnClass).then( (confirm) => {
      if(confirm) {
        let data = {
          producto_id: this.nuevoProductoPedidoForm.value.producto_id,
          subtotal: this.nuevoProductoPedidoForm.value.subtotal || null,
          cantidad: this.nuevoProductoPedidoForm.value.cantidad,
          pedido_id: this.idPedido || null
        }
        this.pedidoService.postPedidoItem(data).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Producto añadido.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('No se ha podido añadir el producto.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    });
  }

  // Eliminar producto del pedido
  openDialogEliminarPedidoItem(id: number) {
    let title: string = 'Eliminar producto'; // Título del modal
    let btnClass = 'aceptar'; // Clase para el botón de aceptar
    
    // Obtenemos la marca con la id que pasamos por parámetro
    this.pedidoService.getPedidoItemById(id).subscribe({
      next: (respuesta: Pedidoitem) => {
        this.nombreProducto = respuesta.Producto;
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener el producto.', 'Aceptar', {
          duration: 3000
        });
      }
    });

    this.dialogService.openDialog(this.eliminarProductoModal, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.pedidoService.deletePedidoItem(id).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Producto eliminado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('No se ha podido eliminar el producto.', 'Aceptar', {
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

  // Eliminar selección de productos del pedido
  eliminarSeleccionDialog() {
    let title = 'Eliminar pedidos seleccionados';
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.eliminarSeleccionProductoModal, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.pedidoService.deletePedidoItem(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Productos eliminados del pedido.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('No se ha podido eliminar el/los producto/s.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    })
  }

  // Obtener los datos del pedido
  getPedido() {
    this.pedidoService.getPedido(this.idPedido).subscribe({
      next: (respuesta) => {
        this.pedido = respuesta;

        if(this.pedido) {
          this.editarpedidoForm.patchValue({
            nombre: this.pedido.Nombre,
            apellidos: this.pedido.Apellidos,
            cuenta_cliente: this.pedido.Cuenta_cliente,
            pais: this.pedido.Pais,
            direccion: this.pedido.Direccion,
            codigo_postal: this.pedido.Codigo_postal,
            poblacion: this.pedido.Poblacion,
            provincia: this.pedido.Provincia,
            telefono: this.pedido.Telefono,
            email: this.pedido.Email,
            notas: this.pedido.Notas,
            metodo_pago: this.pedido.Metodo_pago,
            estado: this.pedido.Estado_id,
            nombre_descuento: this.pedido.Nombre_descuento,
            tipo_descuento: this.pedido.Tipo_descuento,
            descuento: this.pedido.Descuento,
            metodo_envio: this.pedido.Metodoenvio_id,
            gastos_envio: this.pedido.Gastos_envio
          })
        }
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener el pedido.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  // Obtener productos asociados al pedido actual
  getPedidoItems() {
    this.pedidoService.getPedidosItemByOrderId(this.idPedido).subscribe({
      next: (respuesta) => {
        this.productosPedido = respuesta
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los productos.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  // Obtener estados de pedido para el select del form
  getEstadosPedido() {
    this.pedidoService.getEstados().subscribe({
      next: (respuesta) => {
        this.estadospedido = respuesta.data;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  // Obtener usuarios para el select del form
  getUsers() {
    this.userService.getAllUsuarios().subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  // Obtener métodos de pago para el select del form
  getMetodopagos() {
    this.metodopagoService.getMetodosPagoDisponibles().subscribe({
      next: (respuesta) => {
        this.metodospago = respuesta.data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  // Obtenemos los métodos de envío
  getMetodosenvio() {
    this.metodoenvioService.getMetodosenvio().subscribe({
      next: (respuesta) => {
        this.metodosenvio = respuesta.data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  getProductos() {
    this.productoService.getProductos().subscribe({
      next: (respuesta) => {
        this.productos = respuesta.data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

}
