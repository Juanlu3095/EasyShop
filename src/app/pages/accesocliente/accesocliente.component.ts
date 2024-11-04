import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-accesocliente',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatTabsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatGridListModule, MatCheckbox, MatButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './accesocliente.component.html',
  styleUrl: './accesocliente.component.scss'
})
export class AccesoclienteComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    consentimiento: new FormControl(false, Validators.requiredTrue)
  });

  registroForm = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required, this.noWhitespaceValidator])),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    password_confirmation: new FormControl('', Validators.compose([Validators.required])),
    consentimiento: new FormControl(false, Validators.requiredTrue)
  });

  botonDisabled:boolean = false; // Variable para evitar que se puedan enviar más solicitudes mientras se procesa otra para login/registro

  constructor(
    private title: Title,
    private _snackBar: MatSnackBar,
    private auth: AuthService,
    private cookieService: CookieService,
    private router:Router,
    private dialogService: DialogService) {}

  ngOnInit(): void {
    this.title.setTitle('Acceso < EasyShop');
  }

  login() {
    this.dialogService.openSpinner(); // Abrimos spinner
    this.botonDisabled = true; // La función no se puede ejecutar más hasta que termine de procesarse, ya salga o no un error

    if(this.loginForm.valid) {
      this.auth.loginUser(this.loginForm.value).subscribe({
        next: (respuesta) => {
          if(respuesta.token) {
            this.cookieService.set('TOKEN_C', respuesta.token, 1); // Guardamos el token si el login es correcto durante 1 día
            this.router.navigate(['/mi-cuenta']);
            this.dialogService.closeAll(); // Cerramos spinner
          } else {
            this.botonDisabled = false;
          }
        },
        error: (error) => {
          this.dialogService.closeAll(); // Cerramos spinner
          this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
            duration: 3000
          });
          this.botonDisabled = false;
        }
      })
    } else {
      this._snackBar.open('El email y/o contraseña no son válidos.', 'Aceptar', {
        duration: 3000
      });
      this.botonDisabled = false;
    }
  }

  registro() {
    this.dialogService.openSpinner(); // Abrimos spinner
    this.botonDisabled = true; // La función no se puede ejecutar más hasta que termine de procesarse, ya salga o no un error
    
    let contrasena = this.registroForm.value.password ?? '';
    let contrasenaRepetir = this.registroForm.value.password_confirmation ?? '';

    if(this.registroForm.valid && contrasena === contrasenaRepetir) {

      this.auth.registroUser(this.registroForm.value).subscribe({
        next: (respuesta) => {
          this.dialogService.closeAll(); // Cerramos spinner
          this._snackBar.open('Se ha creado el usuario. Por favor, revise su email.', 'Aceptar', {
            duration: 5000
          });
          this.botonDisabled = false;
        },
        error: (error) => {
          this.dialogService.closeAll(); // Cerramos spinner
          this._snackBar.open('No se ha podido procesar su solicitud.', 'Aceptar', {
            duration: 3000
          });
          this.botonDisabled = false;
        }
      })
      
    } else if(this.registroForm.valid && contrasena !== contrasenaRepetir) {
      this.dialogService.closeAll(); // Cerramos spinner
      this._snackBar.open('Ambos campos de contraseña deben coincidir.', 'Aceptar', {
        duration: 3000
      });
      this.botonDisabled = false;

    } else {
      this.dialogService.closeAll(); // Cerramos spinner
      this._snackBar.open('Se ha producido un error.', 'Aceptar', {
        duration: 3000
      });
      this.botonDisabled = false;
    }
    
  }

  // Función que se introducen en los Validators para comprobar que no haya espacios en blanco en los input
  public noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    // Si el control en null o undefined, se deja una cadena vacía, trim para eliminar espacios en blanco al principio y final.
    const isWhitespace = (control.value || '').trim().length === 0; // con length se comprueba si la longitud es 0
    const isValid = !isWhitespace; // Invertimos el valor de isWhitespace, por lo que si es true, isValid es false
    return isValid ? null : { whitespace: true }; // Si es válido, isValid debe devolver null, que para los validadores es lo que debe dar para ser correcto
  }
}
