import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-canalempleo',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatSelectModule, MatFormFieldModule, MatButton, MatCardModule, MatGridListModule, RouterLink],
  templateUrl: './canalempleo.component.html',
  styleUrl: './canalempleo.component.scss'
})
export class CanalempleoComponent implements OnInit{

  constructor(private title: Title, private activatedroute: ActivatedRoute, private ofertaempleoservice: OfertasempleoService) {}

  ofertasempleo: Ofertaempleo[];
  categoriasdeempleo: Jobcategory[];
  provincias: Provincias[];
  provincia: string | null;
  categoria: string | null;
  puesto: string | null;

  ngOnInit(): void {
    this.title.setTitle('Ofertas de empleo');
    
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

    // Intentar hacerlo sólo con consulta a php usando HttpParams de Angular para apuntar a Laravel
    // Ordenar ofertas mostrando primero las últimas ofertadas
    /* this.activatedroute.firstChild?.params.subscribe(parametros => {
      this.categoria = parametros['categoria'] || '';
      this.provincia = parametros['provincia'] || '';
      this.puesto = parametros['puesto'] || ''; 

      console.log(parametros)
    }); */

    this.activatedroute.queryParams.subscribe(parametros => {
      this.categoria = parametros['categoria'] || '';
      this.provincia = parametros['provincia'] || '';
      this.puesto = parametros['puesto'] || ''; 
    })
    
    console.log(this.provincia)

    this.ofertaempleoservice.getAllOfertas().subscribe({
      next: (respuesta) => {
        this.ofertasempleo = respuesta;
        console.log(respuesta)
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
