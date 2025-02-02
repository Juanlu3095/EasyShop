import { Component, OnDestroy, OnInit, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CarritoService } from '../../services/carrito.service';
import { Subscription, map } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment.development';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-carritopage',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [HeaderComponent, FooterComponent, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, MatFormFieldModule, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './carritopage.component.html',
  styleUrl: './carritopage.component.scss'
})
export class CarritopageComponent implements OnInit, OnDestroy{

  subtotal: number;
  dataSource: MatTableDataSource<Product>;
  cart: Product[];
  displayedColumns: string[] = ['imagen', 'nombre', 'precio', 'cantidad', 'subtotal', 'acciones']; // Permite indicar las columnas a mostrar en el HTML

  endPointFiles = environment.DriveEndpoint;
  suscripcion: Subscription[] = [];

  constructor(private title: Title, private carrito: CarritoService) {}

  ngOnInit(): void {
    this.title.setTitle('Carrito | EasyShop');
    this.getCarrito();
    this.getSubtotal();

    this.suscripcion.push(this.carrito.productos.subscribe( () => {
      this.getCarrito();
    }))
  }

  ngOnDestroy(): void {
    this.suscripcion.forEach(item => item.unsubscribe());
  }

  aumentarCantidad(indice: number) {
    this.cart = this.carrito.cart;
    this.cart[indice].cantidad++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.carrito.productos.next(this.cart) // Podemos emitir desde el componente porque get productos() no tiene asObservable(). Emitimos y recibimos el suscribe del ngOnInit, incluido en el header    
    // No es necesario llamar a getSubtotal porque esta función ya está suscrita a get productos del servicio
  }

  dismimuirCantidad(indice: number) {
    this.cart = this.carrito.cart;
    if(this.cart[indice].cantidad > 1) { // Comprobamos que la cantidad no sea menor de 1
      this.cart[indice].cantidad--;
    }
    
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.carrito.productos.next(this.cart)
  }

  // Borramos el producto del array y actualizamos el array por habernos suscrito en el ngOnInit
  deleteProduct(indice: number) {
    this.carrito.deleteProducto(indice);
  }

  getCarrito() {
    this.dataSource = new MatTableDataSource(this.carrito.cart);
  }

  getSubtotal() {
    this.suscripcion.push(this.carrito.productos
      .pipe(map(productos => {
  
        // Con reduce sumamos los valores de todos los precios empezando desde 0. Con Number convertimos todo en números para poder sumar correctamente
        return productos.reduce((prev, curr) => Number(prev) + Number( curr.Precio_rebajado_euros? curr.Precio_rebajado_euros * curr.cantidad : curr.Precio_euros * curr.cantidad), 0)
      }))
      .subscribe( subtotal => {
        this.subtotal = Number(subtotal.toFixed(2))
      })) 
  }

}



