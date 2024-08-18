import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MensajescontactoService } from '../../../services/mensajescontacto.service';
import { Mensajescontacto } from '../../../models/mensajescontacto';

@Component({
  selector: 'app-dasheliminarmensaje',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarmensaje.component.html',
  styleUrl: './dasheliminarmensaje.component.scss'
})
export class DasheliminarmensajeComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private mensajeService: MensajescontactoService, private _snackBar: MatSnackBar) {}
  mensaje: Mensajescontacto;

  ngOnInit(): void {
    if (this.data.id) {
      this.getMensaje(this.data.id);
    }  
  }

  getMensaje(id: number) {
      this.mensajeService.getMensaje(id).subscribe({
        next: (respuesta: Mensajescontacto) => {
          this.mensaje = respuesta;
        },
        error: (error) => {
          console.error(error);
        }
      })
  } 

  eliminarMensaje() {
    this.mensajeService.deleteMensaje(this.data.id).subscribe({
      next: (response) => {
        this._snackBar.open('Mensaje eliminado.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error('Ha ocurrido un error:', error);
      }
    })
  }
}
