import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MetodospagoService } from '../../services/metodospago.service';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Metodopago } from '../../models/metodopago';

@Component({
  selector: 'app-dashboardmetodospago',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, RouterLink],
  templateUrl: './dashboardmetodospago.component.html',
  styleUrl: './dashboardmetodospago.component.scss'
})
export class DashboardmetodospagoComponent implements OnInit, OnDestroy{

  metodospago: Metodopago[];
  disabledT: boolean = false;
  suscripcion: Subscription;
  constructor(private metodopagoService: MetodospagoService, private _snackBar: MatSnackBar, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Métodos de pago < Easyshop');
    this.getMetodospago();

    this.suscripcion = this.metodopagoService.refresh$.subscribe( () => {
      this.getMetodospago()
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

  switchActivar(slug: string, event: MatSlideToggleChange) {
    this.disabledT = true;
    //console.log(`ola ${slug}`, event.checked)
    
    let activo = event.checked ? 1 : 2; // Devuelve 1 si es true y 2 si es false, 1 = activado 2 = desactivado
    
    this.metodopagoService.updateActivado(slug, activo).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Método de pago actualizado.', 'Aceptar', {
          duration: 3000
        });
        this.disabledT = false;
      },
      error: (error) => {
        this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
          duration: 3000
        });
        this.disabledT = false;
      }
    })
  }

  getMetodospago() {
    this.metodopagoService.getMetodosPago().subscribe({
      next: (respuesta) => {
        // Si se hace console.log(respuesta) va a salir la última modificación de respuesta porque si respuesta lo asignamos metodopago los cambios en el último
        // se reflejan en el original
        // console.log('Respuesta original:', JSON.parse(JSON.stringify(respuesta))) // Con esto se mantiene la respuesta original para este console.log
        this.metodospago = respuesta.data;
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
