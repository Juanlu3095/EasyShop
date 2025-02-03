import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import { Jobcategory } from '../../models/jobcategory';
import { Provincias } from '../../models/provincias';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { Subscription } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-canalempleo',
  standalone: true,
  imports: [MatPaginatorModule, HeaderComponent, FooterComponent, MatSelectModule, MatFormFieldModule, MatButton, MatCardModule, MatGridListModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './canalempleo.component.html',
  styleUrl: './canalempleo.component.scss'
})
export class CanalempleoComponent implements OnInit, OnDestroy{

  constructor(private title: Title, private activatedroute: ActivatedRoute, private ofertaempleoservice: OfertasempleoService, private responsive: ResponsivedesignService) {}

  suscripcion: Subscription;
  ofertasempleo: Ofertaempleo[];
  categoriasdeempleo: Jobcategory[];
  provincias: Provincias[];

  // Para el resposive de MATERIAL GRID
  colList: number;
  rowList: string;
  colItem: number;
  rowItem: string;

  filtroForm = new FormGroup({
    provincia: new FormControl(''),
    categoria: new FormControl(''),
    puesto: new FormControl(''),
  })

  ngOnInit(): void {
    this.title.setTitle('Ofertas de empleo | EasyShop');
    this.disenoResponsivo();
    
    /* Obtenemos las categorías de empleo para el select del filtro */
    this.ofertaempleoservice.getAllJobcategories().subscribe({
      next: (respuesta) => {
        this.categoriasdeempleo = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })

    /* Obtenemos las provincias para el select del filtro */
    this.ofertaempleoservice.getAllProvinces().subscribe({
      next: (respuesta) => {
        this.provincias = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })

    this.ofertaempleoservice.getAllOfertas().subscribe({
      next: (respuesta) => {
        this.ofertasempleo = respuesta;
        this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
      },
      error: (error) => {
        console.error(error);
      }
    })

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  // PAGINACIÓN
  paginatedData: Ofertaempleo[] = []; // El array que contendrá las ofertas por página seleccionada, se actualiza al cambiar de página con paginateData
  pageSize = 5; // Número de elementos por página por defecto
  currentPage = 0; // Usamos esto para el slice de paginateData

  paginateData() {
    const startIndex = this.currentPage * this.pageSize; // La paginación empieza en la posicion 0
    const endIndex = startIndex + this.pageSize; // Marcaría la última posición del array ofertasempleo

    // slice permite excluir del array elementos de un extremo al otro, siendo startIndex el inicio de la página y endIndex el final
    this.paginatedData = this.ofertasempleo.slice(startIndex, endIndex); 
  }

  // Se ejecuta cuando cambiamos el numero de elementos por página en mat-paginator
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize; // las propiedadespageSize y pageIndex las da el tipo PageEvent
    this.currentPage = event.pageIndex;
    this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
  }

  filtrarEmpleos() {
    this.ofertaempleoservice.filtrarOfertas(this.filtroForm.value).subscribe({
      next: (respuesta) => {
        this.ofertasempleo = respuesta;
        this.paginateData(); // Se actualizan los filtros de las páginas para generar el paginador
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  disenoResponsivo() {
    this.suscripcion = this.responsive.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Desktop':
            this.colList = 2;
            this.rowList = "5:1";
            this.colItem = 1;
            this.rowItem = "1"
            break;
          case 'Portátil':
            this.colList = 1;
            this.rowList = "5:1";
            this.colItem = 1;
            this.rowItem = "1"
            break;
          case 'Tablet':
            this.colList = 1;
            this.rowList = "5:1";
            this.colItem = 1;
            this.rowItem = "1";
            break;
          case 'Móvil':
            this.colList = 1;
            this.rowList = "4:1";
            this.colItem = 1;
            this.rowItem = "1"
            break;
        }
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
