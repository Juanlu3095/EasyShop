import { Component, OnDestroy, OnInit, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { Product } from '../../models/product';
import { ProductosService } from '../../services/productos.service';
import { Subscription } from 'rxjs';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CuponesService } from '../../services/cupones.service';
import { Cupon } from '../../models/cupon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetodospagoService } from '../../services/metodospago.service';
import { Metodopago } from '../../models/metodopago';
import { PedidosService } from '../../services/pedidos.service';
import { DialogService } from '../../services/dialog.service';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { MetodosenvioService } from '../../services/metodosenvio.service';
import { Metodoenvio } from '../../models/metodoenvio';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-checkoutpage',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDividerModule, MatGridListModule, MatCardModule, MatRadioModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './checkoutpage.component.html',
  styleUrl: './checkoutpage.component.scss'
})
export class CheckoutpageComponent implements OnInit, OnDestroy{

  carrito: Product[];
  pedido: Product[];
  cupondescuento: Cupon;
  metodospago: Metodopago[] = [];
  metodosenvio: Metodoenvio[] = [];
  gastosenvio: number = 0;
  subtotal: number; // Aplica para el precio total sin descuento
  total: number; // Aplica para el precio total con descuento
  rowHeight: string;
  rowspan: number;
  rowspanArea: number;
  suscripcion: Subscription[] = [];

  cuponForm = new FormGroup({
    codigo: new FormControl<string>('', Validators.required)
  })

  checkoutForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    apellidos: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    pais: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    direccion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    codigo_postal: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.minLength(1)])),
    poblacion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    provincia: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    telefono: new FormControl<number | null>(null, Validators.compose([Validators.required, Validators.minLength(1)])),
    email: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1), Validators.email])),
    notas: new FormControl<string>('', Validators.compose([Validators.minLength(1)])),
    metodo_envio: new FormControl<number>(1, Validators.compose([Validators.required ,Validators.min(1), Validators.max(2)])),
    metodo_pago: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
  })

  constructor(
    private title: Title,
    private responsive: ResponsivedesignService,
    private carritoService: CarritoService,
    private productoService: ProductosService,
    private cuponService: CuponesService,
    private metodospagoService: MetodospagoService,
    private pedidosService: PedidosService,
    private metodosenvioService: MetodosenvioService,
    private router: Router,
    private _snackbar: MatSnackBar,
    private dialogService: DialogService ) {}

  ngOnInit(): void {
    this.title.setTitle('Finalizar compra | EasyShop');
    this.responsiveDesign();
    this.getProductosCarrito();
    this.getMetodospagodisponibles();
    this.getMetodosenvio();

    this.suscripcion.push(this.carritoService.productos.subscribe( () => {
      this.getProductosCarrito();
    }))
  }

  ngOnDestroy(): void {
    this.suscripcion.forEach(item => item.unsubscribe());
  }

  responsiveDesign() {
    this.suscripcion.push(this.responsive.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Desktop':
            this.rowHeight = "5:1";
            this.rowspan = 1;
            this.rowspanArea = 3;
            break;
          case 'Portátil':
            this.rowHeight = "5:1";
            this.rowspan = 1;
            this.rowspanArea = 4;
            break;
          case 'Tablet':
            this.rowHeight = "5:1";
            this.rowspan = 1;
            this.rowspanArea = 4;
            break;
          case 'Móvil':
            this.rowHeight = "3:1";
            this.rowspan = 1;
            this.rowspanArea = 4;
            break;
          default:
            this.rowHeight = "5:1";
            break;
        }
      },
      error: (error) => {
        console.error(error)
      }
    }))
  }

  // Comprobar gastos de envio
  comprobarGastosenvio(event: MatSelectChange) {

    // Buscamos el metodo de envio en el array metodosenvio con la id que nos devuelve event.value y obtenemos el precio
    let metodoenvio = this.metodosenvio.find(metodoenvio => metodoenvio.Id === event.value); // event.value contiene la id del metodo de envio
    this.gastosenvio = metodoenvio?.Precio ?? 0;
    this.getSubtotal(); //Actualizamos el precio total
  }

  /* Comprueba si el cupón es válido y lo añade a tu pedido con un observable */
  comprobarcupon(){
    if(this.cuponForm.valid) {
      this.cuponService.getCuponPorCodigo(this.cuponForm.value).subscribe({
        next: (respuesta) => {
          
          if(this.subtotal > respuesta.data.Gasto_minimo && respuesta.data.Limite_uso > 0) {

            let dateActual = new Date();
            let caducidad = new Date(respuesta.data.Caducidad);

            let valorActual = Date.parse(dateActual.toDateString()); // Fecha actual en milisegundos
            let valorCaducidad = Date.parse(caducidad.toDateString()); // Fecha de caducidad del cupón en milisegundos

            if(valorCaducidad > valorActual) {
              this.cupondescuento = respuesta.data;
              this.getSubtotal();
              this._snackbar.open('Cupón aplicado.', 'Aceptar', {
                duration: 3000
              });

            } else {
              this._snackbar.open('Cupón caducado.', 'Aceptar', {
                duration: 3000
              });
            }

          } else {
            this._snackbar.open('Cupón no válido.', 'Aceptar', {
              duration: 3000
            });
          }
        },
        error: (error) => {
          this._snackbar.open('Cupón no encontrado.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    }
  }

  getMetodosenvio() {
    this.metodosenvioService.getMetodosenvio().subscribe({
      next: (respuesta) => {
        this.metodosenvio = respuesta.data
      },
      error: (error) => {
        this._snackbar.open('No se ha podido encontrar métodos de envío válidos.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  getMetodospagodisponibles() {
    this.metodospagoService.getMetodosPagoDisponibles().subscribe({
      next: (respuesta) => {
        this.metodospago = respuesta.data
      },
      error: (error) => {
        this._snackbar.open('No se ha podido encontrar métodos de pago válidos.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  /* Comprueba el método de pago del radio button y procede al pago según el caso */
  crearPedido(){
    if(this.checkoutForm.valid) {
      this.dialogService.openSpinner();

      let data = {
        nombre: this.checkoutForm.value.nombre,
        apellidos: this.checkoutForm.value.apellidos,
        pais: this.checkoutForm.value.pais,
        direccion: this.checkoutForm.value.direccion,
        codigo_postal: this.checkoutForm.value.codigo_postal,
        poblacion: this.checkoutForm.value.poblacion,
        provincia: this.checkoutForm.value.provincia,
        telefono: this.checkoutForm.value.telefono,
        email: this.checkoutForm.value.email,
        notas: this.checkoutForm.value.notas,
        metodo_pago: this.checkoutForm.value.metodo_pago,
        subtotal: this.subtotal,
        nombre_descuento: this.cupondescuento ? this.cupondescuento.Nombre : null,
        tipo_descuento: this.cupondescuento ? this.cupondescuento.Tipo : null,
        descuento: this.cupondescuento ? this.cupondescuento.Descuento : null,
        metodo_envio: this.checkoutForm.value.metodo_envio ?? 1,
        gastos_envio: this.gastosenvio ?? 0,
        total: this.total,
        productos: this.pedido.map(producto => ({ // Creamos un nuevo array con los datos del pedido
          producto: producto.Id,
          nombre_producto: producto.Nombre,
          subtotal: producto.Precio_rebajado_euros ? producto.Precio_rebajado_euros : producto.Precio_euros,
          cantidad: producto.cantidad,
          total: producto.Precio_rebajado_euros ? producto.Precio_rebajado_euros * producto.cantidad : producto.Precio_euros * producto.cantidad,
        }))
      }
      
      if (this.checkoutForm.value.metodo_pago == 'transferencia') {
        this.pedidosService.postPedido(data).subscribe({
          next: (respuesta) => {
            this.dialogService.closeAll();
            this._snackbar.open('Su pedido ha sido registrado.', 'Aceptar', {
              duration: 3000
            });
            localStorage.setItem('referencia_pedido', respuesta.data);
            this.carritoService.deleteCarrito();
            this.router.navigate(['/informacion-transferencia']);
          },
          error: (error) => {
            this.dialogService.closeAll();
            this._snackbar.open('No se ha podido procesar su pedido.', 'Aceptar', {
              duration: 3000
            });
          }
        })

      } else if (this.checkoutForm.value.metodo_pago == 'tarjeta') {
          this.pedidosService.pagoTarjeta(data).subscribe({
            next: (respuesta: any) => {
              this.dialogService.closeAll();
              
              if(respuesta) { // En la respuesta nos viene el formulario a enviar a Redsys
                this.carritoService.deleteCarrito();
                this.pedidosService.redsys(respuesta.form)
              } else {
                this.router.navigate(['/resultado-del-pago/error']);
              }
            },
            error: (error) => {
              this.dialogService.closeAll();
              this._snackbar.open('No se ha podido procesar su pedido.', 'Aceptar', {
                duration: 3000
              });
            }
          })
      }
      
    }
    
  }

  /* Obtenemos los productos del carrito */
  getProductosCarrito() {
    this.carrito = this.carritoService.cart; // Lo inyectamos en this.carrito porque el cart del servicio es un JSON
    let arrayIds: number[] = [];
    this.carrito.forEach(item => // Ver si usar aqui carritoService.cart en lugar de this.carrito da error
       arrayIds.push(item.Id)
    );
    if(arrayIds.length > 0) {

      this.productoService.getProductosByIds(arrayIds).subscribe({
        next: (respuesta) => {
          this.pedido = respuesta;
          
          // Encuentra los productos que coinciden entre los arrays this.carrito y this.pedido
          /* const productosCoinciden = this.pedido.filter(itempedido => 
            this.carrito.some(itemcarrito => itempedido.Id === itemcarrito.Id)
          )
          console.log('coincide:', productosCoinciden) */
  
          //this.carrito.sort( (a,b) => a.Id - b.Id); // Ordena el carrito por Id en orden ascendente
  
          // Añade la cantidad del carrito en localStorage al pedido que viene de la base de datos
          this.pedido.forEach(item => {
            item.cantidad = this.carrito.find(itemcarrito => itemcarrito.Id === item.Id)?.cantidad || 0;
          })
  
          this.getSubtotal();
  
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
    

  }

  // Obtenemos el total del pedido
  getSubtotal() {
    this.subtotal = this.pedido.reduce((prev, curr) => Number(prev) + Number( curr.Precio_rebajado_euros? curr.Precio_rebajado_euros * curr.cantidad : curr.Precio_euros * curr.cantidad), 0);

    if(this.cupondescuento && this.cupondescuento.Tipo == 'Fijo'){
      this.total = Number(this.subtotal) - Number(this.cupondescuento.Descuento) + Number(this.gastosenvio);
      
    } else if(this.cupondescuento && this.cupondescuento.Tipo == 'Porcentual') {
      this.total = this.subtotal + Number(this.gastosenvio) - this.subtotal * this.cupondescuento.Descuento / 100;

    } else {
      this.total = this.subtotal + Number(this.gastosenvio);
    }
  }
}
