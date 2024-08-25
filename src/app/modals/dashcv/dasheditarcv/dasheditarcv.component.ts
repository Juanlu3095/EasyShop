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
import { Cv } from '../../../models/cv';

@Component({
  selector: 'app-dasheditarcv',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dasheditarcv.component.html',
  styleUrl: './dasheditarcv.component.scss'
})
export class DasheditarcvComponent implements OnInit{

  cv: Cv;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private ofertaservice: OfertasempleoService, private _snackBar: MatSnackBar) {}

  editarCvForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    telefono: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    incorporacion: new FormControl('', Validators.required),
    estado_candidatura: new FormControl('', Validators.required), // estado_candidatura debe tener el mismo nombre que en la base de datos, si no, no lo va a editar
  })

  ngOnInit(): void {
    this.getCv(this.data.id);
  }

  getCv(id: number) {
    this.ofertaservice.getCv(id).subscribe({
      next: (respuesta) => {
        this.cv = respuesta;
        
        this.editarCvForm.patchValue({
          nombre: this.cv.Nombre,
          apellidos: this.cv.Apellidos,
          email: this.cv.Email,
          telefono: this.cv.Teléfono,
          pais: this.cv.País,
          ciudad: this.cv.Ciudad,
          incorporacion: this.cv.Incorporación,
          estado_candidatura: this.cv.Candidatura,
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarCv() {
    this.ofertaservice.updateCv(this.data.id, this.editarCvForm.value).subscribe({
      next: (respuesta) => {
        console.log('Form:', this.editarCvForm);
        this._snackBar.open('CV editado.', 'Aceptar', {
          duration: 3000
        });
      },
      error: (error) => {
        console.error('Ha ocurrido un error:', error);
      }
    })
  }
}
