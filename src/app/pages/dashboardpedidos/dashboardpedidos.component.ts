import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../models/pedido';
import { Subscription } from 'rxjs';
import { TableButton } from '../../models/tablebutton';
import { Title } from '@angular/platform-browser';
import { DialogService } from '../../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboardpedidos',
  standalone: true,
  imports: [TablacompletaComponent, MatButtonModule,],
  templateUrl: './dashboardpedidos.component.html',
  styleUrl: './dashboardpedidos.component.scss'
})
export class DashboardpedidosComponent implements OnInit, OnDestroy{

  pedidos: Pedido[];
  nombrePedido: string; // Para el dialog de eliminar pedido
  suscripcion: Subscription;
  columns = ['Id', 'Cliente', 'Estado', 'Total', 'Fecha']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  selectedIds: number[] = [];

  @ViewChild('contentEliminar') eliminarPedidoModal!: TemplateRef<HTMLElement>
  @ViewChild('contentEliminarSeleccion') eliminarSeleccionPedidoModal!: TemplateRef<HTMLElement>

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.editarPedido(id) },
    {id: 2, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.openDialogEliminarPedido(id)},
  ]

  constructor(private pedidoService: PedidosService, private dialogService: DialogService, private _snackBar: MatSnackBar, private title: Title, private router: Router) {}

  ngOnInit(): void {
    this.title.setTitle('Pedidos < Easyshop');
    this.getPedidos();

    this.suscripcion = this.pedidoService.refresh$.subscribe(() => {
      this.getPedidos();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

  editarPedido(id: number) {
    this.router.navigate(['dashboard/pedidos/', id])
  }

  openDialogEliminarPedido(id: number) {
    let title: string = 'Eliminar producto'; // Título del modal
    let btnClass = 'aceptar'; // Clase para el botón de aceptar
    
    // Obtenemos la marca con la id que pasamos por parámetro
    this.pedidoService.getPedido(id).subscribe({
      next: (respuesta: Pedido) => {
        console.log(respuesta)
        this.nombrePedido = respuesta.Cliente;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.dialogService.openDialog(this.eliminarPedidoModal, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.pedidoService.deletePedido(id).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Pedido eliminado.', 'Aceptar', {
              duration: 3000
            });
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
    });
  }

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox, necesario para eliminar lo seleccionado
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  eliminarSeleccionDialog() {
    let title = 'Eliminar pedidos seleccionados';
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.eliminarSeleccionPedidoModal, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.pedidoService.deletePedido(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Pedidos eliminados.', 'Aceptar', {
              duration: 3000
            });
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
    })
  }

  getPedidos() {
    this.pedidoService.getPedidos().subscribe({
      next: (respuesta) => {
        this.pedidos = respuesta.data;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
