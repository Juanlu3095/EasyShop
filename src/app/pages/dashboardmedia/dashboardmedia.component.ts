import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImagenService } from '../../services/imagen.service';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { Subscription } from 'rxjs';
import { DashnuevamediaComponent } from '../../modals/dashmedia/dashnuevamedia/dashnuevamedia.component';
import { Image } from '../../models/image';
import { environment } from '../../../environments/environment.development';
import { DasheditarmediaComponent } from '../../modals/dashmedia/dasheditarmedia/dasheditarmedia.component';

@Component({
  selector: 'app-dashboardmedia',
  standalone: true,
  imports: [NgOptimizedImage, MatButton, MatFormFieldModule, MatInputModule, MatGridListModule, MatDialogModule],
  templateUrl: './dashboardmedia.component.html',
  styleUrl: './dashboardmedia.component.scss'
})
export class DashboardmediaComponent implements OnInit, OnDestroy{

  constructor(private title: Title, private imageService: ImagenService, private responsiveService: ResponsivedesignService) {}

  imagenes: Image[];
  imagenesFiltradas: Image[] = [];
  suscripcion: Subscription[] = [];
  cols: number;
  rowHeight: string;
  storageEndpoint = environment.FilesEndpoint;

  ngOnInit(): void {
    this.disenoResponsivo();
    this.title.setTitle('Galería de medios < EasyShop');
    this.getImagenes();

    if(this.imagenes) {
      this.imagenesFiltradas =  [...this.imagenes];
    }

    // Manejo de la suscripción de las imágenes, cada vez que se ejecute, volverá a cargar las imágenes. Añadimos la suscripción al Array
    this.suscripcion.push(this.imageService.refresh$.subscribe(() => {
      this.getImagenes();
    }));
    
  }

  ngOnDestroy(): void {
    this.suscripcion.forEach((elemento) => { elemento.unsubscribe() });
  }

  /* MODAL PARA AÑADIR NUEVO EMPLEO */
  readonly dialog = inject(MatDialog);

  openDialogNuevoMedio() {
    this.dialog.open(DashnuevamediaComponent);
  }

  openDialogEditarMedio(id: number) {
    this.dialog.open(DasheditarmediaComponent, {
      data: { id: id }
    })
  }

  // Obtenemos el tipo de dispositivo y aplicamos los valores a la tabla de Angular Material según el caso.
  // Necesitamos desuscribirnos al observable. No es una petición HTTP.
  disenoResponsivo() {
    this.suscripcion.push(this.responsiveService.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Desktop':
            this.cols = 5;
            this.rowHeight = '1.25:1';
            break;
          case 'Portátil':
            this.cols = 4;
            this.rowHeight = '1.5:1';
            break;
          case 'Tablet':
            this.cols = 3;
            this.rowHeight = '1.5:1';
            break;
          case 'Móvil':
            this.cols = 2;
            this.rowHeight = '1.5:1';
            break;
          default:
            console.log('Dispositivo desconocido.');
            break;
        }
      },
      error: (error) => {
        console.error(error);
      }
    })
  );
  }

  // Obtenemos las imágenees de la API.
  // No es necesario desuscribirse al ser una petición HTTP, ya que cada vez que ésta se ejecuta, se completa automáticamente y no se sigue observando.
  getImagenes() {
    this.suscripcion.push(this.imageService.getImages().subscribe({
      next: (respuesta) => {
        this.imagenes = respuesta.data;
        this.imagenesFiltradas = this.imagenes;
      },
      error: (error) => {
        console.error(error);
      }
    })
  );
  }

  /*
  * Aplicamos un filtro en el que separamos el array imagenes (lo que obtenemos de la api directamente) e imagenesFiltradas (lo que se filtra al usar palabras clave). 
  */
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Hace referencia a la palabra del input que usaremos para filtrar imágenes.

    if(!filterValue) { // Si no hay palabra para filtrar las imágenes filtradas vuelven a ser las de la api al completo.
      this.imagenesFiltradas = this.imagenes; 
    } else { // Si hay palabra a filtrar asignamos a imagenesFiltradas las imagenes con filtro desde el array imagenes.
      this.imagenesFiltradas = this.imagenes.filter( word => word.Nombre.toLowerCase().includes(filterValue)); // Filtramos por el 'title' del Array
    }
  }
}
