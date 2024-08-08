import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';

@Component({
  selector: 'app-dasheliminarempleo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dasheliminarempleo.component.html',
  styleUrl: './dasheliminarempleo.component.scss'
})
export class DasheliminarempleoComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number, nombre: string}, private empleoService: OfertasempleoService, private _snackBar: MatSnackBar) {}

  nombreEmpleo: string;

  ngOnInit(): void {
    this.nombreEmpleo = this.data.nombre;

  }

  eliminarEmpleo(id: number) {
    this.empleoService.deleteOferta(id).subscribe({
      next: (response) => {
        console.log('La oferta ha sido eliminada satisfactoriamente', response);
        this._snackBar.open('Oferta de empleo eliminada.', 'Aceptar')
      },
      error: (error) => {
        console.error('Ha ocurrido un error:', error);
      }
    })
  }
}
