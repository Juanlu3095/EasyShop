import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIcon, MatCardModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  enviando:boolean = false;
  emailguardado: boolean = false;

  constructor(private router: Router){}

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

  ngOnInit(): void {
    // Para evitar que al pinchar en un link vaya a cualquier posición
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top on navigation end
      }
    });
  }
}
