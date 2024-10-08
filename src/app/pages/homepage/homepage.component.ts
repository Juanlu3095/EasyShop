import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { NewsletterService } from '../../services/newsletter.service';

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

  constructor(private router: Router, private newsletterService: NewsletterService){}

  newsletterForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])) // el nombre de formcontrol debe ser igual que el de la base de datos
  })
  
  suscripcionNews() {
    
    if(this.newsletterForm.valid){
      this.enviando = true;
      console.log(this.newsletterForm);
      this.newsletterService.postNewsletter(this.newsletterForm.value).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this.emailguardado = true;
        },
        error: (error) => {
          console.error('Se ha producido un error', error);
        }
      })
      
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
