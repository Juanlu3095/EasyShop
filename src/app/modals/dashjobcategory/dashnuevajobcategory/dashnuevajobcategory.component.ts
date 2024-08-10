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

@Component({
  selector: 'app-dashnuevajobcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashnuevajobcategory.component.html',
  styleUrl: './dashnuevajobcategory.component.scss'
})
export class DashnuevajobcategoryComponent {

  categorias: Jobcategory[];
  constructor(private ofertaService: OfertasempleoService, private _snackBar: MatSnackBar) {}

  crearCategoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    slug: new FormControl('', Validators.required),
  });

  crearCategoria() {
    if(this.crearCategoriaForm.valid) {
      this.ofertaService.postJobcategory(this.crearCategoriaForm.value).subscribe({
        next: (response) => {
          this._snackBar.open('Categoría creada.', 'Aceptar', {
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
