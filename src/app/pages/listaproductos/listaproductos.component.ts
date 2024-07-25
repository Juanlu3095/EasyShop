import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-listaproductos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, MatDivider, MatListModule, MatCardModule, MatIcon],
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.scss'
})
export class ListaproductosComponent implements OnInit{

  constructor(private activatedroute: ActivatedRoute, private title: Title) {}

  // Variable para obtener la categoría de la url
  categoria: string | null;

  ngOnInit(): void {
    this.categoria = this.activatedroute.snapshot.firstChild?.params['categoria']; // Obtenemos la categoría de la ruta (se usa firstChild por ser una ruta child)

    if(this.categoria) {
      console.log('La categoría es:', this.categoria);
      let titulopage = this.toCamelCaseWithoutSpaces(this.categoria);
      this.title.setTitle(titulopage);
    } else {
      console.log('No se ha introducido una categoría');
      this.title.setTitle('Todos los productos');
    }

  }

  /* Transforma string en camel case: primera letra mayúscula */
  toCamelCaseWithoutSpaces(str: string) {
    return str.replace(/\s+/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, function(match: any, index: number) {
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
   }
}
  

