import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { VentasService } from '../../services/ventas.service';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-panelcontrol',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './panelcontrol.component.html',
  styleUrl: './panelcontrol.component.scss'
})
export class PanelcontrolComponent implements OnInit{

  ventasBeneficios: Venta[];
  ventasCantidad: Venta[];
  displayedColumnsBeneficios: string[] = ['producto', 'beneficios']
  displayedColumnsventas: string[] = ['producto', 'ventas']

  constructor(private title: Title, private ventaService: VentasService) {}

  ngOnInit(): void {
    this.title.setTitle('Panel de control < EasyShop')

    this.getVentasPorBeneficio()
    this.getVentasPorCantidad()
  }

  // Obtiene ventas por número de veces que se vende un producto
  getVentasPorCantidad() {
    this.ventaService.getVentasCantidad().subscribe({
      next: (respuesta) => {
        this.ventasCantidad = respuesta
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  // Obtiene ventas por beneficios en euros de un producto
  getVentasPorBeneficio() {
    this.ventaService.getVentasBeneficios().subscribe({
      next: (respuesta) => {
        this.ventasBeneficios = respuesta
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
