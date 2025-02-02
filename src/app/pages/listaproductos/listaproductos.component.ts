import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Productcategory } from '../../models/productcategory';
import { Marca } from '../../models/marca';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment.development';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-listaproductos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, MatDivider, MatCardModule, MatIcon, MatButtonModule, MatSelectModule, MatPaginatorModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.scss'
})
export class ListaproductosComponent implements OnInit{

  // Variable para obtener la categoría de la url
  categoria: string | null;
  categorias: Productcategory[];
  marcaId: number | null;
  marca: Marca;
  marcas: Marca[];
  productos: Product[] = [];
  endpointFile = environment.DriveEndpoint;

  @ViewChild('formFiltro') formfiltro: ElementRef;

  filtroForm = new FormGroup({
    categoria: new FormControl<number>(NaN), // Iniciamos en NaN porque la api debe recibir un dato de tipo numeric|nullable
    marca: new FormControl<number>(NaN),
    preciomin: new FormControl<number>(NaN),
    preciomax: new FormControl<number>(NaN),
  })

  constructor(private activatedroute: ActivatedRoute, private title: Title, private productService: ProductosService, private carrito: CarritoService) {}

  ngOnInit(): void {
    this.categoria = this.activatedroute.snapshot.firstChild?.params['categoria']; // Obtenemos la categoría de la ruta (se usa firstChild por ser una ruta child)
    this.marcaId = this.activatedroute.snapshot.firstChild?.params['marca']; // Obtenemos la categoría de la ruta (se usa firstChild por ser una ruta child)
    this.getCategorias();
    this.getMarcas();

    // Hay que comprobar que la categoría contenida en la variable 'categoria' existe en el back-end
    if(this.categoria) {
      let titulopage = this.toCamelCaseWithoutSpaces(this.categoria); // Ponemos la primera letra de categoria en mayúscula
      this.title.setTitle(`${titulopage} | EasyShop`);
      this.getProductosPorCategoria(); // Obtenemos marca por el slug de la categoría de la url

    } else if(this.marcaId) {
      this.getMarca(); 
      this.getProductosPorMarca(); // Obtenemos marca por la id de la url
      
    } else {
      this.title.setTitle('Todos los productos | EasyShop');
      this.getProductos();
    }

  }

  /* Transforma string en Pascal case: primera letra mayúscula */
  toCamelCaseWithoutSpaces(str: string): string {
    return str
    .toLowerCase() // Convierte todo a minúsculas antes de hacer nada más
    .replace(/\s+(\w)|^\w/g, (match) => match.toUpperCase()) // Hace mayúscula cada palabra, incluyendo la primera
    .replace(/\s+/g, ''); // Elimina espacios
  }

   // PAGINACIÓN
  paginatedData: Product[] = []; // El array que contendrá las ofertas por página seleccionada, se actualiza al cambiar de página con paginateData
  pageSize = 10; // Número de elementos por página por defecto
  currentPage = 0; // Usamos esto para el slice de paginateData

  paginateData() {
    const startIndex = this.currentPage * this.pageSize; // La paginación empieza en la posicion 0
    const endIndex = startIndex + this.pageSize; // Marcaría la última posición del array ofertasempleo

    // slice permite excluir del array elementos de un extremo al otro, siendo startIndex el inicio de la página y endIndex el final
    this.paginatedData = this.productos.slice(startIndex, endIndex); 
  }

  // Se ejecuta cuando cambiamos el numero de elementos por página en mat-paginator
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize; // las propiedadespageSize y pageIndex las da el tipo PageEvent
    this.currentPage = event.pageIndex;
    this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
  }

   // Permite mostrar u ocultar los filtros según el caso
   cambiarFiltros() {
    const isHidden = this.formfiltro.nativeElement.style.display === "none";
    this.formfiltro.nativeElement.style.display = isHidden ? 'block' : 'none';
   }

   // Obtenemos productos usando el form que filtra por categoría, marca y precio
   filtrar() {
    if(this.filtroForm.valid) {
      this.productService.getProductsByFilter(this.filtroForm.value).subscribe({
        next: (respuesta) => {
          this.categoria = 'Resultados del filtrado:'; // No cambiar el <title> para no afectar al SEO
          this.productos = respuesta;
          this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
   }

   // Obtenemos la marca por la id de la url
   getMarca() {
    if(this.marcaId) {
      this.productService.getMarca(this.marcaId).subscribe({
        next: (respuesta) => {
          this.marca = respuesta
          this.title.setTitle(`${this.marca.Nombre} | EasyShop`);
        },
        error: (error) => {
          console.error(error);
        }
      })
    }   
   }

   // Obtenemos productos según la id de la marca
   getProductosPorMarca() {
    if(this.marcaId) {
      this.productService.getProductsByBrand(this.marcaId).subscribe({
        next: (respuesta) => {
          this.productos = respuesta.data;
          this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
    
   }

   // Obtenemos los productos de una categoría
   getProductosPorCategoria() {
    if(this.categoria) {
      this.productService.getProductsByCategory(this.categoria).subscribe({
        next: (respuesta) => {
          this.productos = respuesta.data;
          this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
   }

   // Obtenemos todos los productos sin distinción
   getProductos() {
      this.productService.getProductosPublicados().subscribe({ // Cambiar esta funcion por una que mande los productos publicados no borrador, poner paginación
        next: (respuesta) => {
          this.productos = respuesta.data;
          this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
        },
        error: (error) => {
          console.error(error)
        }
      })
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

  getMarcas() {
    this.productService.getMarcas().subscribe({
      next: (respuesta) => {
        this.marcas = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  // Añadimos el producto al carrito
  addtocart(producto: Product) {
    this.carrito.addNewProducto(producto, 1);
  }

}
  

