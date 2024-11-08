import { Component, OnInit } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CarritoService } from '../../services/carrito.service';
import { Product } from '../../models/product';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-checkoutpage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatGridListModule, MatCardModule, MatRadioModule, MatButtonModule, RouterLink],
  templateUrl: './checkoutpage.component.html',
  styleUrl: './checkoutpage.component.scss'
})
export class CheckoutpageComponent implements OnInit{

  metodopago:string;
  carrito: Product[];
  pedido: Product[];
  subtotal: number;

  constructor(private title: Title, private carritoService: CarritoService, private productoService: ProductosService) {}

  ngOnInit(): void {
    this.title.setTitle('Finalizar compra | EasyShop');
    this.getProductosCarrito();
  }

  /* Comprueba si el cupón es válido y lo añade a tu pedido con un observable */
  comprobarcupon(){

  }

  /* Comprueba el método de pago del radio button y procede al pago según el caso */
  pagar(){
    console.log(this.metodopago);
  }

  /* Obtenemos los productos del carrito */
  getProductosCarrito() {
    this.carrito = this.carritoService.cart; // Lo inyectamos en this.carrito porque el cart del servicio es un JSON
    let arrayIds: number[] = [];
    this.carrito.forEach(item => // Ver si usar aqui carritoService.cart en lugar de this.carrito da error
       arrayIds.push(item.Id)
    );

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
          item.cantidad = this.carrito.find(itemcarrito => itemcarrito.Id === item.Id)?.cantidad || 0
        })

      },
      error: (error) => {
        console.error(error)
      }
    })

    
  }
}
