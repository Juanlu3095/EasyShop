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
import { Jobcategory } from '../../../models/jobcategory';

@Component({
  selector: 'app-dasheditarjobcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dasheditarjobcategory.component.html',
  styleUrl: './dasheditarjobcategory.component.scss'
})
export class DasheditarjobcategoryComponent implements OnInit{
  categoria: Jobcategory;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private ofertaService: OfertasempleoService, private _snackBar: MatSnackBar) {}

  editarCategoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    slug: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    console.log('Éstos son los datos recibidos:' ,this.data.id);

    this.ofertaService.getJobCategory(this.data.id).subscribe({
      next: (respuesta: Jobcategory) => {
        this.categoria = respuesta;

        // Inyectamos los valores actuales del formulario antes de editar
        this.editarCategoriaForm.patchValue({
          nombre: this.categoria.nombre,
          slug: this.categoria.slug
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarCategoria() {
    if(this.editarCategoriaForm.valid) {
      console.log('Estos son los datos del formulario:', this.editarCategoriaForm.value);
      this.ofertaService.updateJobcategory(this.data.id, this.editarCategoriaForm.value).subscribe({
        next: (response) => {
          this._snackBar.open('Categoría editada.', 'Aceptar', {
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
