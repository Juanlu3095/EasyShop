import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImagenService } from '../../services/imagen.service';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboardmedia',
  standalone: true,
  imports: [NgOptimizedImage, MatButton, MatFormFieldModule, MatInputModule, MatGridListModule],
  templateUrl: './dashboardmedia.component.html',
  styleUrl: './dashboardmedia.component.scss'
})
export class DashboardmediaComponent implements OnInit, OnDestroy{

  constructor(private title: Title, private imageService: ImagenService, private responsiveService: ResponsivedesignService) {}

  imagenes: any[] = [];
  imagenesFiltradas: any[] = [];
  suscripcion: Subscription[] = [];
  cols: number;
  rowHeight: string;

  ngOnInit(): void {

    this.disenoResponsivo();

    this.title.setTitle('Galería de medios < EasyShop');
    this.getImagenes();
    this.imagenesFiltradas =  [...this.imagenes];

  }

  ngOnDestroy(): void {
    this.suscripcion.forEach((elemento) => { elemento.unsubscribe() });
  }

  // Obtenemos el tipo de dispositivo y aplicamos los valores a la tabla de Angular Material según el caso.
  // Necesitamos desuscribirnos al observable. No es una petición HTTP.
  disenoResponsivo() {
    this.suscripcion.push(this.responsiveService.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Desktop':
            this.cols = 4;
            this.rowHeight = '1.5:1'
            break;
          case 'Tablet':
            this.cols = 3;
            this.rowHeight = '1.5:1'
            break;
          case 'Móvil':
            this.cols = 2;
            this.rowHeight = '1.5:1'
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
        console.log(respuesta);
        this.imagenes = respuesta;
        console.log('Images: ', this.imagenes)
        this.imagenesFiltradas = this.imagenes;
        console.log('Filtro: ', this.imagenesFiltradas)
      },
      error: (error) => {
        console.error(error);
      }
    })
  );
  }

  openDialogNuevoMedio() {

  }

  /*
  * Aplicamos un filtro en el que separamos el array imagenes (lo que obtenemos de la api directamente) e imagenesFiltradas (lo que se filtra al usar palabras clave). 
  */
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Hace referencia a la palabra del input que usaremos para filtrar imágenes.

    if(!filterValue) { // Si no hay palabra para filtrar las imágenes filtradas vuelven a ser las de la api al completo.
      this.imagenesFiltradas = this.imagenes; 
    } else { // Si hay palabra a filtrar asignamos a imagenesFiltradas las imagenes con filtro desde el array imagenes.
      this.imagenesFiltradas = this.imagenes.filter( word => word.title.toLowerCase().includes(filterValue)); // Filtramos por el 'title' del Array
    }
  }
}
