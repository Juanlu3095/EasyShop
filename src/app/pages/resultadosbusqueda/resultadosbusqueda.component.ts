import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-resultadosbusqueda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule, MatIcon],
  templateUrl: './resultadosbusqueda.component.html',
  styleUrl: './resultadosbusqueda.component.scss'
})
export class ResultadosbusquedaComponent implements OnInit{

  constructor(private activatedroute: ActivatedRoute, private title: Title) {}

  busqueda: string | null;

  ngOnInit(): void {
    this.busqueda = this.activatedroute.snapshot.params['busqueda']; // Obtenemos las palabras de la búsqueda de la ruta

    this.title.setTitle(`Resultados de la búsqueda para «${this.busqueda}»`);
    
    if(this.busqueda) {
      console.log('La búsqueda es:', this.busqueda);
    } else {
      console.log('No se ha introducido una categoría');
    }
  }
}
