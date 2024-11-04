import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIcon, MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidenavserviceService } from '../../services/sidenavservice.service';
import { ProductosService } from '../../services/productos.service';
import { Productcategory } from '../../models/productcategory';
import { CarritoService } from '../../services/carrito.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatToolbarModule, MatMenuModule, MatBadgeModule, MatIconModule, MatSidenavModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{

  suscripcion: Subscription[] = [];
  cantidadCarrito: number;

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private sidenavService: SidenavserviceService,
    private router: Router,
    private productService: ProductosService,
    private carrito: CarritoService) 
  {
    this.iconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/twitter.svg'));
    this.iconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/instagram.svg')); 
  }

  showFiller = false;

  categorias: Productcategory[];

  searchForm = new FormGroup({
    searchFormControl : new FormControl('', Validators.required)
  });

  searchproduct(){
    let search = this.searchForm.value.searchFormControl;
    if(this.searchForm.valid) {
      this.router.navigate(['/busqueda', search]).then( () => {
        window.location.reload(); // Recarga página para mostrar el valor de la variable search cuando buscamos un producto. Ver stackoverflow en favoritos/angular con observable para breadcrumb
      })
    }
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getCantidadCarrito();
    this.suscripcion.push(this.carrito.refresh$.subscribe( () => {
      this.openSidenav();
    }))
  }

  ngOnDestroy(): void {
    this.suscripcion.forEach((elemento) => { elemento.unsubscribe() });
  }

  getCategorias() {
     this.productService.getCategorias().subscribe({
      next: (respuesta) => {
        this.categorias = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getCantidadCarrito() {
    this.suscripcion.push(
      this.carrito.productos
      .pipe(map(productos => {
  
        // Con reduce sumamos los valores de todos los precios empezando desde 0. Con Number convertimos todo en números para poder sumar correctamente
        return productos.reduce((prev, curr) => Number(prev) + Number(curr.cantidad), 0)
      }))
      .subscribe( cantidad => {
        this.cantidadCarrito = cantidad;
      })) 
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  openSidenav() {
    this.sidenavService.open();
  }
}
