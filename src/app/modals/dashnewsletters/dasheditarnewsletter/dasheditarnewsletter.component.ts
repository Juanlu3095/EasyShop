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
import { NewsletterService } from '../../../services/newsletter.service';
import { Newsletter } from '../../../models/newsletter';

@Component({
  selector: 'app-dasheditarnewsletter',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dasheditarnewsletter.component.html',
  styleUrl: './dasheditarnewsletter.component.scss'
})
export class DasheditarnewsletterComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private newsletterService: NewsletterService, private _snackBar: MatSnackBar) {}

  newsletter: Newsletter;

  editarNewsletterForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required]))
  });

  ngOnInit(): void {
    this.getNewsletter(this.data.id);
    
  }

  getNewsletter(id: number) {
    this.newsletterService.getNewsletter(id).subscribe({
      next: (respuesta) => {
        this.newsletter = respuesta;
        console.log(respuesta)
        this.editarNewsletterForm.patchValue({
          email: this.newsletter.Email,
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarNewsletter() {
    this.newsletterService.updateNewsletter(this.data.id, this.editarNewsletterForm.value).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Suscripción a la newsletter editada.', 'Aceptar', {
          duration: 3000
        });
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
