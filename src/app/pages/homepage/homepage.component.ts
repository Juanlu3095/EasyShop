import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIcon, MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  enviando:boolean = false;
  emailguardado: boolean = false;

  newsletterForm = new FormGroup({
    emailFormControl: new FormControl('', Validators.compose([Validators.email, Validators.required]))
  })
  
  
  async suscripcionNews() {
    let email = this.newsletterForm.value.emailFormControl;
    if(this.newsletterForm.valid){
      this.enviando = true;
      await console.log(email); // Aquí vendría la función para enviar a la API
      this.emailguardado = true;
      
    }
    
    
  }
}
