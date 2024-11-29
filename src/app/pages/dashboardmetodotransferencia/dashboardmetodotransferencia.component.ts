import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MetodospagoService } from '../../services/metodospago.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Metodopago } from '../../models/metodopago';

@Component({
  selector: 'app-dashboardmetodopago',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardmetodotransferencia.component.html',
  styleUrl: './dashboardmetodotransferencia.component.scss'
})
export class DashboardmetodotransferenciaComponent implements OnInit{

  metodopago: Metodopago;
  slug: string = 'transferencia' // String con el que identificamos el recurso

  transferenciaForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    descripcion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    descripcion_cliente: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    activo: new FormControl<boolean>(false, Validators.required),
    nombre_cuenta: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    numero_cuenta: new FormControl<number>(0, Validators.compose([Validators.required, Validators.min(1)])),
    nombre_banco: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    codigo_clasificacion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    iban: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    bic_swift: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
  })

  constructor(private metodospagoService: MetodospagoService, private title: Title, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getMetodopago();

  }

  getMetodopago() {
    if(this.slug) {
      this.metodospagoService.getMetodoPago(this.slug).subscribe({
        next: (respuesta) => {
          this.metodopago = respuesta.data
          console.log(respuesta)
          this.setTitle()
          
          // Inyectamos los valores del método de pago en el formulario
            this.transferenciaForm.patchValue({
              activo: this.metodopago.activo === 1 ? true : false, // 1 = activo, 2 = desactivado
              nombre: this.metodopago.nombre,
              descripcion: this.metodopago.descripcion,
              descripcion_cliente: this.metodopago.descripcion_cliente,
              nombre_cuenta: JSON.parse(this.metodopago.configuracion.toString()).nombre, // convertimos un objeto JSON en un objeto JS que podamos manipular
              numero_cuenta: JSON.parse(this.metodopago.configuracion.toString()).numero, // Usamos toString() porque lo que transformamos es un objeto no un string, que es lo que pide
              nombre_banco: JSON.parse(this.metodopago.configuracion.toString()).nombre_banco,
              codigo_clasificacion: JSON.parse(this.metodopago.configuracion.toString()).clasificacion,
              iban: JSON.parse(this.metodopago.configuracion.toString()).iban,
              bic_swift: JSON.parse(this.metodopago.configuracion.toString()).bic_swift,
            })
        },
        error: (error) => {
          this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    } else {
      return;
    }
  }

  updateMetodopago() {
    if(this.transferenciaForm.valid) {
      let data = {
        nombre: this.transferenciaForm.value.nombre,
        activo: this.transferenciaForm.value.activo ? 1 : 2,
        descripcion: this.transferenciaForm.value.descripcion,
        descripcion_cliente: this.transferenciaForm.value.descripcion_cliente,
        configuracion: JSON.stringify({ // convertimos los inputs de la configuración en JSON para pasarlos a la API, la cual pide un dato de tipo JSON
          'nombre': this.transferenciaForm.value.nombre_cuenta,
          'numero': this.transferenciaForm.value.numero_cuenta,
          'nombre_banco': this.transferenciaForm.value.nombre_banco,
          'clasificacion': this.transferenciaForm.value.codigo_clasificacion,
          'iban': this.transferenciaForm.value.iban,
          'bic_swift': this.transferenciaForm.value.bic_swift
        })
      }

      this.metodospagoService.updateMetodopago(this.slug, data).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Método de pago actualizado.', 'Aceptar', {
            duration: 3000
          });
        },
        error: (error) => {
          this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
            duration: 3000
          });
        }
      })
    }
  }

  setTitle() {
    this.title.setTitle(this.metodopago? `${this.metodopago.nombre} < Easyshop` : 'Editar método de pago < Easyshop')
  }
}
