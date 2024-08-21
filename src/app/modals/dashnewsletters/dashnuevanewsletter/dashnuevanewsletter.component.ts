import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsletterService } from '../../../services/newsletter.service';
import { Newsletter } from '../../../models/newsletter';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-dashnuevanewsletter',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashnuevanewsletter.component.html',
  styleUrl: './dashnuevanewsletter.component.scss'
})
export class DashnuevanewsletterComponent{

  constructor(private newsletterService: NewsletterService, private _snackBar: MatSnackBar) {}
  newsletter: Newsletter;

  newsletterForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required]))
  })

  postNewsletter() {
    if(this.newsletterForm.valid) {
      this.newsletterService.postNewsletter(this.newsletterForm.value).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Suscripción creada.', 'Aceptar', {
            duration: 3000
          })
        },
        error: (error) => {
          console.error('Ha ocurrido un error', error);
        }
      })
    }
  }
}
