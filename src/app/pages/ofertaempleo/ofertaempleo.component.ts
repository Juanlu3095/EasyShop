import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';

@Component({
  selector: 'app-ofertaempleo',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatFormFieldModule, MatGridListModule, MatInputModule, MatCardModule],
  templateUrl: './ofertaempleo.component.html',
  styleUrl: './ofertaempleo.component.scss'
})
export class OfertaempleoComponent implements OnInit{

  oferta: Ofertaempleo; // Se recibe sólo un registro, por lo que no es un array de valores
  idoferta: number | null;
  constructor(private title: Title, private ofertaempleoservice: OfertasempleoService, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {

    this.idoferta = Number(this.activatedroute.snapshot.paramMap.get('idoferta')); // Con Number convertimos el valor a tipo number

    if(this.idoferta) {
      this.ofertaempleoservice.getOferta(this.idoferta).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this.oferta = respuesta.data;
          console.log('Ésta es la oferta:', this.oferta);
          this.title.setTitle(`${this.oferta.puesto} - Oferta de empleo`);
        },
        error: (error) => {
          console.error(error);
        }
      })
    } else {
      this.title.setTitle('Oferta de empleo');
    }
    
  }
}
