import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsletterService } from '../../../services/newsletter.service';
import { Newsletter } from '../../../models/newsletter';

@Component({
  selector: 'app-dasheliminarnewsletter',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarnewsletter.component.html',
  styleUrl: './dasheliminarnewsletter.component.scss'
})
export class DasheliminarnewsletterComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private newsletterService: NewsletterService, private _snackBar: MatSnackBar) {}
  newsletter: Newsletter;

  ngOnInit(): void {
    if (this.data.id) {
      this.getNewsletter(this.data.id);
    }  
  }

  getNewsletter(id: number) {
    this.newsletterService.getNewsletter(id).subscribe({
      next: (respuesta) => {
        this.newsletter = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  eliminarNewsletter() {
    this.newsletterService.deleteNewsletter(this.data.id).subscribe({
      next: (response) => {
        this._snackBar.open('Suscripción a la newsletter eliminada.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error('Ha ocurrido un error:', error);
      }
    })
  }
}
