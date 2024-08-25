import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';

@Component({
  selector: 'app-dasheliminarseleccioncv',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarseleccioncv.component.html',
  styleUrl: './dasheliminarseleccioncv.component.scss'
})
export class DasheliminarseleccioncvComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number[]}, private ofertaempleoService: OfertasempleoService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    console.log(this.data.ids)
  }

  // Función para eliminar los registros seleccionados
  eliminarSeleccionados() {

    this.ofertaempleoService.deleteCv(this.data.ids).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this._snackBar.open('CVs eliminados.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
