import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { registerLocaleData, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-ofertaempleo',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [HeaderComponent, FooterComponent, MatFormFieldModule, MatGridListModule, MatInputModule, MatCardModule, MatSelectModule, MatCheckbox, CommonModule, ReactiveFormsModule],
  templateUrl: './ofertaempleo.component.html',
  styleUrl: './ofertaempleo.component.scss'
})
export class OfertaempleoComponent implements OnInit{

  oferta: Ofertaempleo; // Se recibe sólo un registro, por lo que no es un array de valores
  idoferta: number | null;

  jobForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    telefono: new FormControl('', Validators.compose([Validators.minLength(9), Validators.required])),
    pais: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    incorporacion: new FormControl('', Validators.required),
    ruta_cv: new FormControl('', Validators.required),
    job_id: new FormControl<number>(0, Validators.compose([Validators.min(1), Validators.required])),
    politica: new FormControl(false, Validators.requiredTrue),
    estado_candidatura: new FormControl('En proceso') // Hay que poner esto porque lo pide CvResource en Laravel y hay que darle un valor
  })

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

  inscripcion(){
    /* let nombre = this.jobForm.value.nombre;
    let apellidos = this.jobForm.value.apellidos;
    let email = this.jobForm.value.email;
    let telefono = this.jobForm.value.telefono;
    let pais = this.jobForm.value.pais;
    let ciudad = this.jobForm.value.ciudad;
    let incorporacion = this.jobForm.value.incorporacion;
    let ruta_cv = this.jobForm.value.ruta_cv;
    let job_id = this.jobForm.value.job_id; */
    this.jobForm.patchValue({
      job_id: this.oferta.id
    })

    if(this.jobForm.valid) {
      console.log('Éstos son los datos del formulario: ', this.jobForm);
      this.ofertaempleoservice.postCv(this.jobForm.value).subscribe({
        next: (respuesta: any) => {
          console.log('Respuesta OK', respuesta);
        },
        error: (error) => {
          console.error('Ha habido un error', error)
        }
      })
    }
    
  }
}
