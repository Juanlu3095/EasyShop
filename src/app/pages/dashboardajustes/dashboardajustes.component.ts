import { Component, OnInit } from '@angular/core';
import { AjustesService } from '../../services/ajustes.service';
import { Ajuste } from '../../models/ajuste';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboardajustes',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dashboardajustes.component.html',
  styleUrl: './dashboardajustes.component.scss'
})
export class DashboardajustesComponent implements OnInit{

  ajustes: Ajuste[];
  email: Ajuste;

  emailForm = new FormGroup({
    ajuste: new FormControl('', Validators.compose([Validators.email, Validators.required, Validators.min(1)]))
  })

  constructor(private ajusteService: AjustesService, private title: Title, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Ajustes < EasyShop')
    
    this.getAjuste();
  }

  updateEmail() {
    if(this.emailForm.valid) {
      this.ajusteService.updateAjuste(this.email.id, this.emailForm.value).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Email actualizado.', 'Aceptar', {
            duration: 3000
          });
        },
        error: (error) => {
          this._snackBar.open('No se ha podido actualizar el email.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    }
    
  }

  // Obtiene todos los ajustes. En este caso no va a ser necesario
  getAjustes() {
    this.ajusteService.getAjustes().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.ajustes = respuesta.data
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  // Obtenemos el ajuste que queramos
  getAjuste() {
    this.ajusteService.getAjuste('email').subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.email = respuesta;

        this.emailForm.patchValue({
          ajuste: this.email.valor
        })
      },
      error: (error) => {
        this._snackBar.open('No se ha podido obtener los datos.', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }
}
