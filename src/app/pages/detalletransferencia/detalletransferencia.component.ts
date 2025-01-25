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
  beneficiario: string;
  banco: string;
  iban: string;
  bic_swift: string;
  referencia: number | null;

  constructor(private title: Title, private metodopagoService: MetodospagoService, private _matsnackbar: MatSnackBar) {
    this.title.setTitle('Detalle del pago | Easyshop')
  }

  ngOnInit(): void {
    this.getMetodoPago()
  }

  getMetodoPago() {
    this.metodopagoService.getTransferencia().subscribe({
      next: (respuesta) => {
        this.metodopago = respuesta.data;
        this.beneficiario = JSON.parse(this.metodopago.configuracion.toString()).nombre;
        this.banco = JSON.parse(this.metodopago.configuracion.toString()).nombre_banco;
        this.iban = JSON.parse(this.metodopago.configuracion.toString()).iban;
        this.bic_swift = JSON.parse(this.metodopago.configuracion.toString()).bic_swift;
        this.referencia = Number(localStorage.getItem('referencia_pedido')) || null // La referencia no puede ser 0
      },
      error: (error) => {
        this._matsnackbar.open('No se han obtenidos los datos necesarios.', 'Aceptar', {
          duration: 3000
        })
      }
    })
  }
}
