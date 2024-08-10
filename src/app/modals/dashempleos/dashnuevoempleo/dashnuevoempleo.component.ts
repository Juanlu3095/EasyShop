import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../../models/ofertaempleo';
import { Jobcategory } from '../../../models/jobcategory';
import { Provincias } from '../../../models/provincias';

@Component({
  selector: 'app-dashnuevoempleo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashnuevoempleo.component.html',
  styleUrl: './dashnuevoempleo.component.scss'
})
export class DashnuevoempleoComponent implements OnInit{

  empleo: Ofertaempleo;
  provincias: Provincias[];
  categorias: Jobcategory[];
  constructor(private ofertaService: OfertasempleoService, private _snackBar: MatSnackBar) {}

  crearEmpleoForm = new FormGroup({
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
    // Obtenemos todas las categorías
    this.ofertaService.getAllJobcategories().subscribe({
      next: (respuesta) => {
        console.log('Estas son las categorias:', respuesta);
        this.categorias = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    });

    // Obtenemos todas las provincias
    this.ofertaService.getAllProvinces().subscribe({
      next: (respuesta) => {
        console.log('Estas son las provincias:', respuesta);
        this.provincias = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  // Creamos la oferta de empleo con los datos del formulario
  crearOferta() {
    if(this.crearEmpleoForm.valid) {
      console.log('Estos son los datos del formulario:', this.crearEmpleoForm.value);
      this.ofertaService.postOferta(this.crearEmpleoForm.value).subscribe({
        next: (response) => {
          console.log('La oferta se ha creado correctamente', response);
          this._snackBar.open('Oferta de empleo creada.', 'Aceptar', {
            duration: 3000
          })
        },
        error: (error) => {
          console.error('Ha ocurrido un error:', error);
        }
      })
    }
  }
}
