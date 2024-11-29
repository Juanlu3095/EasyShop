import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductosService } from '../../services/productos.service';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { MatButtonModule } from '@angular/material/button';
import { TableButton } from '../../models/tablebutton';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboardproducts',
  standalone: true,
  imports: [TablacompletaComponent, MatButtonModule, RouterLink],
  templateUrl: './dashboardproducts.component.html',
  styleUrl: './dashboardproducts.component.scss'
})
export class DashboardproductsComponent implements OnInit, OnDestroy{

  suscripcion: Subscription;
  productos: Product[];
  nombreProducto: string;
  columns = ['Nombre', 'Inventario', 'Precio_euros', 'Precio_rebajado_euros', 'Ultima_modificacion']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  selectedIds: number[] = [];

  @ViewChild('contentEliminar') modalEliminar!: TemplateRef<HTMLElement>; // El contenido a mostrar en el modal, opcional
  @ViewChild('contentEliminarSeleccion') modalEliminarSeleccion!: TemplateRef<HTMLElement>; 

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.editarCategoria(id) },
    {id: 2, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.openDialogEliminarProducto(id)},
  ]

  constructor(private title: Title, private productService: ProductosService, private dialogService: DialogService,  private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Productos < EasyShop');
    this.getProductos();

    this.suscripcion = this.productService.refresh$.subscribe(() => {
      this.getProductos();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getProductos() {
    this.productService.getProductos().subscribe({
      next: (respuesta) => {
        this.productos = respuesta.data;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  editarCategoria(id: number) {
    this.router.navigate(['dashboard/productos', id]);
  }

  openDialogEliminarProducto(id: number) {
    let title: string = 'Eliminar producto'; // Título del modal
    let btnClass = 'aceptar'; // Clase para el botón de aceptar
    
    // Obtenemos la marca con la id que pasamos por parámetro
    this.productService.getProducto(id).subscribe({
      next: (respuesta) => {
        this.nombreProducto = respuesta.Nombre;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.dialogService.openDialog(this.modalEliminar, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.productService.deleteProducto(id).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Producto eliminado.', 'Aceptar', {
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
    let title = 'Eliminar productos seleccionados';
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.modalEliminarSeleccion, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.productService.deleteProducto(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Productos eliminados.', 'Aceptar', {
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
}
