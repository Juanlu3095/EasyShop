import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-dashboardmedia',
  standalone: true,
  imports: [NgOptimizedImage, MatButton, MatFormFieldModule, MatInputModule, MatGridListModule],
  templateUrl: './dashboardmedia.component.html',
  styleUrl: './dashboardmedia.component.scss'
})
export class DashboardmediaComponent implements OnInit{

  constructor(private title: Title, private imageService: ImagenService) {}

  imagenes: any[] = [];
  imagenesFiltradas: any[] = [];

  ngOnInit(): void {
    this.title.setTitle('Galería de medios < EasyShop');
    this.getImagenes();
    this.imagenesFiltradas =  [...this.imagenes];
    
  }

  getImagenes() {
    this.imageService.getImages().subscribe({
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
      this.imagenesFiltradas = this.imagenes.filter( word => word.title.toLowerCase().includes(filterValue)); 
    }
  }
}
