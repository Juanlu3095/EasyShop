import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MensajescontactoService } from '../../services/mensajescontacto.service';
import { Mensajescontacto } from '../../models/mensajescontacto';

@Component({
  selector: 'app-dashboardmensajeindividual',
  standalone: true,
  imports: [],
  templateUrl: './dashboardmensajeindividual.component.html',
  styleUrl: './dashboardmensajeindividual.component.scss'
})
export class DashboardmensajeindividualComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute, private mensajeService: MensajescontactoService, private title: Title) {}
  mensaje: Mensajescontacto;

  ngOnInit(): void {
    this.getMensaje();
  }

  getMensaje() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('idmensaje'));
    
    this.mensajeService.getMensaje(id).subscribe({
      next: (respuesta: Mensajescontacto) => {
        this.mensaje = respuesta;
        this.title.setTitle(`${this.mensaje.Asunto} - Mensaje < EasyShop`);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
