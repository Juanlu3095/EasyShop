import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckbox, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(
    private title: Title,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router,
    private dialogService: DialogService) {}

  botonDisabled:boolean = false; // Variable para evitar que se puedan enviar más solicitudes mientras se procesa otra para login

  ngOnInit(): void {
    this.title.setTitle('Acceder < EasyShop');
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    politica: new FormControl(false, Validators.requiredTrue)
  });

  login() {
    this.dialogService.openSpinner(); // Abrimos spinner
    if(this.loginForm.valid) {
      this.botonDisabled = true; // La función no se puede ejecutar más hasta que termine de procesarse, ya salga o no un error
      this.auth.loginAdmin(this.loginForm.value).subscribe({
        next: (respuesta) => {
          if(respuesta.token) {
            this.cookieService.set('TOKEN_A', respuesta.token, 1); // Guardamos el token si el login es correcto durante 1 día
            this.router.navigate(['/dashboard']);
            this.botonDisabled = false; 
            this.dialogService.closeAll(); // Cerramos spinner
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
      this.dialogService.closeAll(); // Cerramos spinner
      this._snackBar.open('El email y/o contraseña no son válidos.', 'Aceptar', {
        duration: 3000
      });
    }
  }

}
