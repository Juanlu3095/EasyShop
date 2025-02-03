import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, Renderer2, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import { TableButton } from '../../models/tablebutton';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tablacompleta',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule],
  templateUrl: './tablacompleta.component.html',
  styleUrl: './tablacompleta.component.scss'
})
export class TablacompletaComponent<T> implements OnChanges, OnInit{
  selection = new SelectionModel<any>(true, []);

  // Implementamos las signals
  /* columns = input.required<string[]>(); // () -> Aquí podríamos incluir columnas por defecto. Éstas serían las columnas que rellenamos con los datos
  displayedColumns = input.required<string[]>(); // Éstas serían todas las columnas incluyendo los checkbox entre otros.
  data = input.required<T[]>(); // Tipo genérico (sólo en TS), lo que hace que pueda ser tanto string como number p.ej., y no usamos 'any'. Sólo para desarrollo. */
  
  // Inputs -> Datos del padre al hijo (Dashboardmensajes => TablaCompleta)
  @Input() columnImage: string[]; // columna para las imagenes
  @Input() columns: string[];
  @Input() displayedColumns: string[];
  @Input() data: T[];
  @Input() buttons: TableButton[];
  @Input() eliminarSeleccionados: () => void;
  @Input() btnDangerAll: boolean = false; // Permite mostrar o no si se muestra el botón de eliminar todo

  // Output -> Datos del hijo al padre (Tablacompleta => DashboardMensajes)
  @Output() selectionChange = new EventEmitter<number[]>(); // Con esto mandamos al padre los ids seleccionados para los checkbox

  dataSource = new MatTableDataSource<T>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; // Hace referencia a mat-paginator en el HTML. Añadimos {static:true} para cambiar el label de registros por página.
  @ViewChild(MatSort) sort: MatSort; // Hace referencia a mat-sort en el HTML
  @ViewChild('btnDangerAll', { static: false }) botonEliminarTodo: ElementRef;

  storageEndpoint = environment.DriveEndpoint;

  // Actualizamos los datos en el HTML
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Data received in app-tablacompleta:', this.data);
      this.dataSource.data = this.data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Registros por página:"; // Cambiamos el label 'Items per page'
    this.paginator._intl.previousPageLabel = "Anterior";
    this.paginator._intl.nextPageLabel = "Siguiente";
  }

  // Función para aplicar el filtro
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Nos lleva automáticamente a la primera página del listado, se ejecuta sólo cuando se activa el filtro (p.ej. escribiendo algo en el filtro.)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Método para emitir los IDs seleccionados al padre con el Output
  emitSelectedIds() {
    const selectedIds = this.selection.selected.map(mensaje => mensaje['Id']);
    console.log('Emitting selected IDs:', selectedIds);
    this.selectionChange.emit(selectedIds);  // Emitimos los IDs seleccionados
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
