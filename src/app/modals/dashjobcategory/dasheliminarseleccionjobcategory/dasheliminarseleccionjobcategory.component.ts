import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';

@Component({
  selector: 'app-dasheliminarseleccionjobcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dasheliminarseleccionjobcategory.component.html',
  styleUrl: './dasheliminarseleccionjobcategory.component.scss'
})
export class DasheliminarseleccionjobcategoryComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number[]}, private empleoService: OfertasempleoService, private _snackBar: MatSnackBar) {}
  idsCategorias: number[];

  ngOnInit(): void {
    this.idsCategorias = this.data.ids;
  }

   // Función para eliminar los registros seleccionados
   eliminarSeleccionados() {

    this.empleoService.deleteJobcategories(this.idsCategorias).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Categorías eliminadas.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
