import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MensajescontactoService } from '../../../services/mensajescontacto.service';

@Component({
  selector: 'app-dasheliminarseleccionmensajes',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarseleccionmensajes.component.html',
  styleUrl: './dasheliminarseleccionmensajes.component.scss'
})
export class DasheliminarseleccionmensajesComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number[]}, private mensajeService: MensajescontactoService, private _snackBar: MatSnackBar) {}
  idsMensajes: number[];

  ngOnInit(): void {
    this.idsMensajes = this.data.ids;
    console.log(this.data)
  }

   // Función para eliminar los registros seleccionados
   eliminarSeleccionados() {

    this.mensajeService.deleteMensaje(this.idsMensajes).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this._snackBar.open('Mensajes eliminados.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
