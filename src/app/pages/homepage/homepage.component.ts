import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { NewsletterService } from '../../services/newsletter.service';
import { ProductosService } from '../../services/productos.service';
import { Marca } from '../../models/marca';
import { environment } from '../../../environments/environment.development';
import { NgOptimizedImage } from '@angular/common';
import { Productcategory } from '../../models/productcategory';
import { Product } from '../../models/product';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIcon, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  enviando:boolean = false;
  emailguardado: boolean = false;

  marcas: Marca[];
  categorias: Productcategory[];
  novedades: Product[];
  fileEndpoint = environment.FilesEndpoint;

  constructor(private router: Router, private newsletterService: NewsletterService, private productService: ProductosService, private carrito: CarritoService){}

  newsletterForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])) // el nombre de formcontrol debe ser igual que el de la base de datos
  })
  
  suscripcionNews() {
    
    if(this.newsletterForm.valid){
      this.enviando = true;
      console.log(this.newsletterForm);
      this.newsletterService.postNewsletter(this.newsletterForm.value).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this.emailguardado = true;
        },
        error: (error) => {
          console.error('Se ha producido un error', error);
        }
      })
      
    } 
  }

  ngOnInit(): void {
    // Para evitar que al pinchar en un link vaya a cualquier posición
    this.router.events.subscribe((event) => { // No es necesario desuscribirse porque el componente se destruye al cambiar de página
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top on navigation end
      }
    });

    this.getNovedades();
    this.getBrands();
    this.getProductcategories();
  }

  getNovedades() {
    this.productService.getProductosUltimasNovedades().subscribe({
      next: (respuesta) => {
        this.novedades = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getBrands() {
    this.productService.getMarcas().subscribe({
      next: (respuesta) => {
        this.marcas = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getProductcategories() {
    this.productService.getCategorias().subscribe({
      next: (respuesta) => {
        this.categorias = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  // Añadimos el producto al carrito
  addtocart(producto: Product) {
    this.carrito.addNewProducto(producto);
  }
}
