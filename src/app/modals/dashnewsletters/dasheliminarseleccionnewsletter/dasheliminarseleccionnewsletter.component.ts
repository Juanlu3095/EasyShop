import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsletterService } from '../../../services/newsletter.service';

@Component({
  selector: 'app-dasheliminarseleccionnewsletter',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarseleccionnewsletter.component.html',
  styleUrl: './dasheliminarseleccionnewsletter.component.scss'
})
export class DasheliminarseleccionnewsletterComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number[]}, private newsletterService: NewsletterService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    console.log(this.data.ids)
  }

  // Función para eliminar los registros seleccionados
  eliminarSeleccionados() {

    this.newsletterService.deleteNewsletter(this.data.ids).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this._snackBar.open('Suscripciones a newsletter eliminadas.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
