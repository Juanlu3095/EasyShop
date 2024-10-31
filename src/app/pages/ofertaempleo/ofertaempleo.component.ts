import { Component, OnInit, OnDestroy, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { registerLocaleData, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import localeEs from '@angular/common/locales/es';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { Subscription } from 'rxjs';
import { DialogService } from '../../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-ofertaempleo',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [HeaderComponent, FooterComponent, MatFormFieldModule, MatGridListModule, MatInputModule, MatCardModule, MatSelectModule, MatCheckbox, MatButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './ofertaempleo.component.html',
  styleUrl: './ofertaempleo.component.scss'
})
export class OfertaempleoComponent implements OnInit, OnDestroy{

  oferta: Ofertaempleo; // Se recibe sólo un registro, por lo que no es un array de valores
  suscripcion: Subscription;
  idoferta: number | null;
  rowHeight: string;

  jobForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    telefono: new FormControl('', Validators.compose([Validators.minLength(9), Validators.required])),
    pais: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    incorporacion: new FormControl('', Validators.required),
    //ruta_cv: new FormControl('', Validators.required), // Se debería quitar ruta_cv de aqui? Cambiar nombre?
    job_id: new FormControl<number>(0, Validators.compose([Validators.min(1), Validators.required])),
    politica: new FormControl(false, Validators.requiredTrue),
    estado_candidatura: new FormControl('En proceso') // Hay que poner esto porque lo pide CvResource en Laravel y hay que darle un valor
  })

  constructor(
    private title: Title,
    private ofertaempleoservice: OfertasempleoService,
    private activatedroute: ActivatedRoute,
    private responsive: ResponsivedesignService,
    private _snackbar: MatSnackBar,
    private dialog: DialogService) {}

  ngOnInit(): void {

    this.responsiveDesign();
    this.idoferta = Number(this.activatedroute.snapshot.paramMap.get('idoferta')); // Con Number convertimos el valor a tipo number

    if(this.idoferta) {
      this.ofertaempleoservice.getOferta(this.idoferta).subscribe({
        next: (respuesta) => {
          this.oferta = respuesta.data;
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

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  responsiveDesign() {
    this.suscripcion = this.responsive.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Desktop':
            this.rowHeight = "25:1";
            break;
          case 'Portátil':
            this.rowHeight = "12:1";
            break;
            case 'Tablet':
              this.rowHeight = "7:1";

              break;
          default:
            this.rowHeight = "4:1";
            break;
        }
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  inscripcion(){
    
    // Le damos la id de la oferta a job_id
    this.jobForm.patchValue({
      job_id: this.oferta.id
    })

    if(this.jobForm.valid) {
      this.dialog.openSpinner();

      // Una vez tenemos los datos del formGroup y los del input de tipo file, los juntamos en un formData, el cual maneja archivos.
      let datos = new FormData();
      datos.append('nombre', this.jobForm.value.nombre ?? '');
      datos.append('apellidos', this.jobForm.value.apellidos ?? '');
      datos.append('email', this.jobForm.value.email ?? '');
      datos.append('telefono', this.jobForm.value.telefono ?? '');
      datos.append('pais', this.jobForm.value.pais ?? '');
      datos.append('ciudad', this.jobForm.value.ciudad ?? '');
      datos.append('incorporacion', this.jobForm.value.incorporacion ?? '');
      datos.append('job_id', this.oferta.id.toString()); // Append obliga a usar string
      datos.append('estado_candidatura', 'En proceso');

      // Agrega el archivo desde fileformData
    const file = this.fileformData.get('ruta_cv') as File;
    if (file) {
      datos.append('ruta_cv', file); // "ruta_cv" viene del form html
    } else {
      console.error('No se ha seleccionado ningún archivo.');
      return; // No continuar si no hay archivo
    }

    // Mostrar los datos del FormData usando forEach
    /* datos.forEach((value, key) => {
      if (value instanceof File) {
        console.log(`${key}:`, value); // Mostrar el nombre del archivo
      } else {
        console.log(`${key}:`, value); // Mostrar el valor del campo
      }
    }); */

    this.ofertaempleoservice.postCv(datos).subscribe({
      next: (respuesta: any) => {
        this.dialog.closeAll();
        this._snackbar.open('Candidatura enviada.', 'Aceptar', {
          duration: 3000
        });
      },
      error: (error) => {
        this.dialog.closeAll();
        this._snackbar.open('Ha ocurrido un error.', 'Aceptar', {
          duration: 3000
        });
      }
    })
    }
    
  }

  // Para obtener los datos del input de tipo file y combinarlo con el formGroup
  fileformData = new FormData();

  // Función para escuchar cuando se selecciona un archivo en el input de tipo file
  getFile(event: Event) {
    const target = event.target as HTMLInputElement;

    const files: FileList | null = target.files; // Obtiene los archivos

    if(files!.length > 0 && files != null) {
      
      const file = files[0];

      this.fileformData.set("ruta_cv", file);
      
      //console.log('ola', this.fileformData.get('ruta_cv'));

    }
  }
}
