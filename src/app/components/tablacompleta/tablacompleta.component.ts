import {OnInit, Component, input, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';

export interface Button {
  id: number;
  nombre: string;
  class: string;
  accion: any;  
}

@Component({
  selector: 'app-tablacompleta',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule],
  templateUrl: './tablacompleta.component.html',
  styleUrl: './tablacompleta.component.scss'
})
export class TablacompletaComponent<T> implements OnChanges{
  selection = new SelectionModel<any>(true, []);

  // Implementamos las signals
  /* columns = input.required<string[]>(); // () -> Aquí podríamos incluir columnas por defecto. Éstas serían las columnas que rellenamos con los datos
  displayedColumns = input.required<string[]>(); // Éstas serían todas las columnas incluyendo los checkbox entre otros.
  data = input.required<T[]>(); // Tipo genérico (sólo en TS), lo que hace que pueda ser tanto string como number p.ej., y no usamos 'any'. Sólo para desarrollo. */
  
  // Inputs
  @Input() columns: string[];
  @Input() displayedColumns: string[];
  @Input() data: T[];
  @Input() buttons: Button[];

  dataSource = new MatTableDataSource<T>();

  // Actualizamos los datos en el HTML
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Data received in app-tablacompleta:', this.data);
      this.dataSource.data = this.data;
    }
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
