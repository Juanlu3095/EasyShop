import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../../models/ofertaempleo';
import { Provincias } from '../../../models/provincias';
import { Jobcategory } from '../../../models/jobcategory';

type Apiresponse = { data:Ofertaempleo }; // Ésta es la respuesta que recibimos de la api

@Component({
  selector: 'app-dasheditarempleo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dasheditarempleo.component.html',
  styleUrl: './dasheditarempleo.component.scss'
})
export class DasheditarempleoComponent implements OnInit{

  empleo: Ofertaempleo;
  provincias: Provincias[];
  categorias: Jobcategory[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private ofertaservice: OfertasempleoService, private _snackBar: MatSnackBar) { }

  editarEmpleoForm = new FormGroup({
    puesto: new FormControl('', Validators.required),
    jobcategory_id: new FormControl(0, Validators.required),
    province_id: new FormControl(0, Validators.required),
    jornada: new FormControl('', Validators.required),
    nivel_profesional: new FormControl('', Validators.required),
    modalidad: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    requisitos: new FormControl('', Validators.required),
    beneficios: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    console.log('Éstos son los datos recibidos:' ,this.data.id)

    // Obtenemos todas las categorías
    this.ofertaservice.getAllJobcategories().subscribe({
      next: (respuesta) => {
        console.log('Estas son las categorias:', respuesta);
        this.categorias = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })

    // Obtenemos todas las provincias
    this.ofertaservice.getAllProvinces().subscribe({
      next: (respuesta) => {
        console.log('Estas son las provincias:', respuesta);
        this.provincias = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })

    // Obtenemos todas la oferta de empleo y la inyectamos en el formulario para editar la oferta
    this.ofertaservice.getOferta(this.data.id).subscribe({
      next: (respuesta: Apiresponse) => {
        console.log('Ésta es la oferta de empleo:', respuesta);
        this.empleo = respuesta.data;

        this.editarEmpleoForm.patchValue({
          puesto: this.empleo.puesto,
          jobcategory_id: this.empleo.jobcategory_id,
          province_id: this.empleo.province_id,
          jornada: this.empleo.jornada,
          nivel_profesional: this.empleo.nivel_profesional,
          modalidad: this.empleo.modalidad,
          salario: this.empleo.salario,
          descripcion: this.empleo.descripcion,
          requisitos: this.empleo.requisitos,
          beneficios: this.empleo.beneficios
        });
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  // Función para editar oferta de empleo
  editarEmpleo() {
    if(this.editarEmpleoForm.valid) {
      this.ofertaservice.updateOferta(this.data.id, this.editarEmpleoForm.value).subscribe({
        next: (response) => {
          console.log('Los datos se han actualizado correctamente', response);
          this._snackBar.open('Oferta de empleo editada.', 'Aceptar', {
            duration: 3000
          });
        },
        error: (error) => {
          console.error('Ha ocurrido un error:', error);
        }
      })
    }
  }

}
