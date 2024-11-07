import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment.development';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-resultadosbusqueda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule, MatIcon, MatPaginatorModule, RouterLink],
  templateUrl: './resultadosbusqueda.component.html',
  styleUrl: './resultadosbusqueda.component.scss'
})
export class ResultadosbusquedaComponent implements OnInit{

  constructor(
    private activatedroute: ActivatedRoute,
    private title: Title,
    private productService: ProductosService,
    private sanitizer: DomSanitizer,
    private carrito: CarritoService) {}

  busqueda: string | null;
  productos: Product[] = []; // Iniciar esto vacío para que no salga el error de length
  endPointFile = environment.FilesEndpoint;

  ngOnInit(): void {
    this.busqueda = this.activatedroute.snapshot.params['busqueda']; // Obtenemos las palabras de la búsqueda de la ruta

    this.title.setTitle(`Resultados de la búsqueda para «${this.busqueda}» | EasyShop`);
    
    if(this.busqueda) {
      this.productService.getProductosBySearch(this.busqueda).subscribe({
        next: (respuesta) => {
          this.productos = respuesta;
          this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
        },
        error: (error) => {
          console.error(error);
        }
      })
    } else {
      console.error('Ha ocurrido un error');
    }
  }

  // Añadimos el producto al carrito
  addtocart(producto: Product) {
    this.carrito.addNewProducto(producto, 1);
  }

  // Sanitizamos la url de la imagen obtenida de la consulta a la api por haber usado una peticón por GET y no por POST
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
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

}
