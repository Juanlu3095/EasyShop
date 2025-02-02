import { Component, ViewChild, OnInit, LOCALE_ID, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { SidenavserviceService } from './services/sidenavservice.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Product } from './models/product';
import { CarritoService } from './services/carrito.service';
import { environment } from '../environments/environment.development';
import { map, Subscription } from 'rxjs';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [RouterOutlet, MatSidenavModule, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'EasyShop';
  productos: Product[];
  cart: Product[] | null;
  subtotal: number;
  cantidadCarrito: number;
  fileEndPoint = environment.DriveEndpoint;
  suscripcion: Subscription[] = []; // Debe manejar la desuscripción de dos observables, como un array

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private sidenavService: SidenavserviceService, private carrito: CarritoService) {}

  ngOnInit() {
    // Seleccionamos el sidenav al que se le vamos a aplicar el servicio. sidenav viene del html #sidenav
    this.sidenavService.setSidenav(this.sidenav);

    this.suscripcion.push(this.carrito.productos.subscribe(productos => {
      this.productos = productos;
      this.getCart();
      this.getSubtotal();
    }));

    this.getSubtotal();

  }

  ngOnDestroy(): void {
    this.suscripcion.forEach((elemento) => { elemento.unsubscribe() });
  }

  // Cerramos el carrito
  closeSidenav(){
    this.sidenavService.close();
  }

  // Borramos el producto del array y actualizamos el array por habernos suscrito en el ngOnInit
  deleteProduct(indice: number) {
    this.carrito.deleteProducto(indice);
  }

  // Obtenemos el subtotal del carrito
  getSubtotal() {
    this.suscripcion.push(this.carrito.productos
      .pipe(map(productos => {
  
        // Con reduce sumamos los valores de todos los precios empezando desde 0. Con Number convertimos todo en números para poder sumar correctamente
        return productos.reduce((prev, curr) => Number(prev) + Number( curr.Precio_rebajado_euros? curr.Precio_rebajado_euros * curr.cantidad : curr.Precio_euros * curr.cantidad), 0)
      }))
      .subscribe( subtotal => {
        this.subtotal = subtotal
      })) 
  }

  getCart() {
    this.productos = this.carrito.cart || '[]';
  }
}
