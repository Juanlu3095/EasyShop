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
import { MensajescontactoService } from '../../../services/mensajescontacto.service';
import { Mensajescontacto } from '../../../models/mensajescontacto';

@Component({
  selector: 'app-dasheditarmensaje',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dasheditarmensaje.component.html',
  styleUrl: './dasheditarmensaje.component.scss'
})
export class DasheditarmensajeComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private mensajeService: MensajescontactoService, private _snackBar: MatSnackBar) {}

  mensaje: Mensajescontacto;
  editarMensajeForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    asunto: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    console.log('Éstos son los datos recibidos:' ,this.data.id);
    this.getMensaje(this.data.id);
  }

  getMensaje(id: number) {
    this.mensajeService.getMensaje(id).subscribe({
      next: (respuesta) => {
        this.mensaje = respuesta;

        this.editarMensajeForm.patchValue({
          nombre: this.mensaje.Nombre,
          apellidos: this.mensaje.Apellidos,
          email: this.mensaje.Email,
          asunto: this.mensaje.Asunto,
          mensaje: this.mensaje.Mensaje
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarMensaje() {
    if(this.editarMensajeForm.valid) {
      this.mensajeService.updateMensaje(this.data.id, this.editarMensajeForm.value).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Mensaje editado.', 'Aceptar', {
            duration: 3000
          });
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }
}
