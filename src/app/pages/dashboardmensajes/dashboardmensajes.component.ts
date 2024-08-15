import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MensajescontactoService } from '../../services/mensajescontacto.service';
import { Mensajescontacto } from '../../models/mensajescontacto';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

@Component({
  selector: 'app-dashboardmensajes',
  standalone: true,
  imports: [TablacompletaComponent, CommonModule],
  templateUrl: './dashboardmensajes.component.html',
  styleUrl: './dashboardmensajes.component.scss'
})
export class DashboardmensajesComponent implements OnInit{

  mensajes: Mensajescontacto[];
  constructor(private title: Title, private mensajeService: MensajescontactoService, private cdr: ChangeDetectorRef) {}

  //checkbox = true;
  //columns = ['name', 'position', 'weight', 'symbol']; // Columnas que rellenamos los datos con la api
  columns = ['Nombre', 'Apellidos', 'Asunto', 'Fecha']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox
  data: any[];
  //checkbox = true;

  ngOnInit(): void {
    this.title.setTitle('Mensajes < EasyShop');
    this.getMessages();

  }

  public ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  prueba() {
    console.log('ola');
  }

  public ACCIONES: any[] = [
    {id: 1, nombre: 'Ver', class: '', accion: () => this.prueba() },
    {id: 2, nombre: 'Editar', class: '', accion: () => this.prueba() },
    {id: 3, nombre: 'Eliminar',class: 'danger', accion: () => this.prueba()},
  ]

  getMessages() {
    this.mensajeService.getAllMensajes().subscribe({
      next: (respuesta: Mensajescontacto[]) => {
        console.log(respuesta);
        this.data = respuesta;

      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
