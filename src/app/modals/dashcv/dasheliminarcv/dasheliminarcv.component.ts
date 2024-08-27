import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';
import { Cv } from '../../../models/cv';

@Component({
  selector: 'app-dasheliminarcv',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarcv.component.html',
  styleUrl: './dasheliminarcv.component.scss'
})
export class DasheliminarcvComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private ofertaempleoService: OfertasempleoService, private _snackBar: MatSnackBar) {}
  cv: Cv;

  ngOnInit(): void {
    if (this.data.id) {
      console.log(this.data.id);
      this.getCv(this.data.id);
    }  
  }

  getCv(id: number) {
    this.ofertaempleoService.getCv(id).subscribe({
      next: (respuesta) => {
        this.cv = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  eliminarCv() {
    this.ofertaempleoService.deleteCv(this.data.id).subscribe({
      next: (response) => {
        this._snackBar.open('CV eliminado.', 'Aceptar', {
          duration: 3000
        })
        console.log(response);
      },
      error: (error) => {
        console.error('Ha ocurrido un error:', error);
      }
    })
  }
}
