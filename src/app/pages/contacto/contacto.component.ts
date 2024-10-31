import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajescontactoService } from '../../services/mensajescontacto.service';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { Subscription } from 'rxjs';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit, OnDestroy{

  constructor(
    private title: Title,
    private mensajeService: MensajescontactoService,
    private _snackbar: MatSnackBar,
    private responsive: ResponsivedesignService,
    private dialog: DialogService) {}

  MensajeForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    asunto: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  })

  suscripcion: Subscription;
  rowHeight: string;

  ngOnInit(): void {
    this.title.setTitle('Contacto');
    this.responsiveDesign()
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  enviarMensaje() {
    if (this.MensajeForm.valid) {
      this.dialog.openSpinner();
      this.mensajeService.postMensaje(this.MensajeForm.value).subscribe({
        next: (respuesta) => {
          this.dialog.closeAll();
          this._snackbar.open('Mensaje enviado.', 'Aceptar', {
            duration: 3000
          });
        },
        error: (error) => {
          this.dialog.closeAll();
          this._snackbar.open('Ha ocurrido un error.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    }
  }

  responsiveDesign() {
    this.suscripcion = this.responsive.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Desktop':
            this.rowHeight = "12:1";
            break;
          default:
            this.rowHeight = "7:1";
            break;
        }
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
