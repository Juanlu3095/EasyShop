import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MensajescontactoService } from '../../services/mensajescontacto.service';
import { Mensajescontacto } from '../../models/mensajescontacto';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { CommonModule } from '@angular/common';
import { TableButton } from '../../models/tablebutton';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DasheditarmensajeComponent } from '../../modals/dashmensajes/dasheditarmensaje/dasheditarmensaje.component';
import { DasheliminarmensajeComponent } from '../../modals/dashmensajes/dasheliminarmensaje/dasheliminarmensaje.component';
import { DasheliminarseleccionmensajesComponent } from '../../modals/dashmensajes/dasheliminarseleccionmensajes/dasheliminarseleccionmensajes.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboardmensajes',
  standalone: true,
  imports: [TablacompletaComponent, CommonModule, MatDialogModule],
  templateUrl: './dashboardmensajes.component.html',
  styleUrl: './dashboardmensajes.component.scss'
})
export class DashboardmensajesComponent implements OnInit, OnDestroy{

  constructor(private title: Title, private mensajeService: MensajescontactoService, private router: Router) {}

  columns = ['Nombre', 'Apellidos', 'Asunto', 'Fecha']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  data: Mensajescontacto[]; // Los datos que insertamos en la tabla HTML
  //selection = new SelectionModel<Mensajescontacto>(true, []); // Para los checkbox
  suscripcion: Subscription;
  selectedIds: number[] = [];

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Ver', class: '', accion: (id:number) => this.verMensaje(id) }, // () => para poder usar this..., le pasamos la id del mensaje
    {id: 2, nombre: 'Editar', class: '', accion: (id:number) => this.openDialogEditarMensaje(id) },
    {id: 3, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.openDialogEliminarMensaje(id)},
  ]

  ngOnInit(): void {
    this.title.setTitle('Mensajes < EasyShop');
    this.getMessages();

    this.suscripcion = this.mensajeService.refresh$.subscribe(() => {
      this.getMessages();
    })
  }

  // Desuscripción del observable para evitar fugas de memoria, se ejecuta al cambiar de página.
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe(); 
  }

  // Obtenemos todos los mensajes de la api
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

  // Inyectamos el dialog
  readonly dialog = inject(MatDialog);

  verMensaje(id: number) {
    this.router.navigate(['dashboard/mensajes', id]);
  }

  openDialogEditarMensaje(id: number) {
    this.dialog.open(DasheditarmensajeComponent, {
      data: { id: id }
    });
  }

  openDialogEliminarMensaje(id: number) { // Al contrario que en dashboardempleos, no podemos pasar directamente el nombre, porque pasamos los botones por un bucle for, y deben ser iguales.
    this.dialog.open(DasheliminarmensajeComponent, {
      data: { id: id }
    });
  }

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  openDialogEliminarSeleccionMensajes() {
    //const ids = this.selection.selected.map(mensaje => mensaje.Id); // Obtenemos los ids de los empleos seleccionados
    //console.log('Mensajes seleccionados:', ids);
    this.dialog.open(DasheliminarseleccionmensajesComponent, {
      data: {ids : this.selectedIds} 
    });
  }
}
