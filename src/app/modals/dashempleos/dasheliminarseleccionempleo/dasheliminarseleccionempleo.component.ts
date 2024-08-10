import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';

@Component({
  selector: 'app-dasheliminarseleccionempleo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dasheliminarseleccionempleo.component.html',
  styleUrl: './dasheliminarseleccionempleo.component.scss'
})
export class DasheliminarseleccionempleoComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number[]}, private empleoService: OfertasempleoService, private _snackBar: MatSnackBar) {}
  idsEmpleos: number[];

  ngOnInit(): void {
    this.idsEmpleos = this.data.ids;

  }

   // Función para eliminar los registros seleccionados
   eliminarSeleccionados() {

    this.empleoService.deleteOfertas(this.idsEmpleos).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this._snackBar.open('Ofertas de empleo eliminadas.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
