import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Metodopago } from '../../models/metodopago';
import { MetodospagoService } from '../../services/metodospago.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalletransferencia',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './detalletransferencia.component.html',
  styleUrl: './detalletransferencia.component.scss'
})
export class DetalletransferenciaComponent implements OnInit{

  metodopago: Metodopago;

  constructor(private title: Title, private metodopagoService: MetodospagoService, private _matsnackbar: MatSnackBar) {
    this.title.setTitle('Detalle del pago < Easyshop')
  }

  ngOnInit(): void {
    
  }

  getMetodoPago() {
    this.metodopagoService.getMetodoPago('transferencia').subscribe({
      next: (respuesta) => {
        this.metodopago = respuesta.data
        console.log(respuesta.data)
      },
      error: (error) => {
        this._matsnackbar.open('No se han obtenidos los datos necesarios.', 'Aceptar', {
          duration: 3000
        })
      }
    })
  }
}
