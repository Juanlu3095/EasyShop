import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajescontactoService } from '../../services/mensajescontacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit{

  constructor(private title: Title, private mensajeService: MensajescontactoService) {}

  MensajeForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    asunto: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.title.setTitle('Contacto');
  }

  enviarMensaje() {
    if (this.MensajeForm.valid) {
      this.mensajeService.postMensaje(this.MensajeForm.value).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }
}
