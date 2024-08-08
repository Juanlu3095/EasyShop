import { Component, OnInit, OnDestroy, inject, ViewChild, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DashnuevoempleoComponent } from '../../components/dashnuevoempleo/dashnuevoempleo.component';
import { DasheditarempleoComponent } from '../../components/dasheditarempleo/dasheditarempleo.component';
import { DasheliminarempleoComponent } from '../../components/dasheliminarempleo/dasheliminarempleo.component';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import localeEs from '@angular/common/locales/es';
import { Subscription } from 'rxjs';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-dashboardempleos',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [MatButton, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSelectModule, MatDialogModule, CommonModule],
  templateUrl: './dashboardempleos.component.html',
  styleUrl: './dashboardempleos.component.scss',
})
export class DashboardempleosComponent implements OnInit, OnDestroy{

  empleos: Ofertaempleo[]; // Esto se suministrará a la tabla con [dataSource], la cual es menos limitada
  linkActivado: any = 'empleo';
  suscripcion: Subscription;
  dataSource: MatTableDataSource<Ofertaempleo>;
  selection = new SelectionModel<Ofertaempleo>(true, []); // Para los checkbox
  displayedColumns: string[] = ['select', 'id', 'puesto', 'provincia', 'jornada', 'fecha', 'acciones']; // Permite indicar las columnas a mostrar en el HTML
  @ViewChild(MatPaginator) paginator: MatPaginator; // Hace referencia a mat-paginator en el HTML
  @ViewChild(MatSort) sort: MatSort; // Hace referencia a mat-sort en el HTML

  constructor(private title: Title, private empleoservice: OfertasempleoService) {}

  /* MODAL PARA AÑADIR NUEVO EMPLEO */
  readonly dialog = inject(MatDialog);

  openDialogNuevoEmpleo() {
    const dialogRef = this.dialog.open(DashnuevoempleoComponent);
  }

  /* MODAL PARA EDITAR EMPLEO */
  openDialogEditarEmpleo(id: number) {
    const dialogRef = this.dialog.open(DasheditarempleoComponent, {
      data: {id : id}
    });
  }

  /* MODAL PARA ELIMINAR EMPLEO */
  openDialogEliminarEmpleo(id: number, nombre: string) {
    const dialogRef = this.dialog.open(DasheliminarempleoComponent, {
      data: {id : id, nombre: nombre}
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Empleos < EasyShop');

    this.getAllOfertas();

    // Manejo de la suscripción, cada vez que se ejecute, volverá a cargar las ofertas
    this.suscripcion = this.empleoservice.refresh$.subscribe(() => {
      this.getAllOfertas();
    })
  }

  // Desuscripción del observable para evitar fugas de memoria, se ejecuta al cambiar de página.
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe(); 
    console.log('Se ha eliminado la suscripción.');
  }

  // Obtenemos todas las ofertas de la API
  getAllOfertas() {
    this.empleoservice.getAllOfertas().subscribe({
      next: (respuesta) => {
        this.empleos = respuesta;
        this.dataSource = new MatTableDataSource(this.empleos);
        console.log('DataSource:' ,this.dataSource);

        // Establece las páginas analizando el dataSource que es el que contiene los empleos
        /* El paginador y el sort hay que ponerlos después de inyectar los empleos en dataSource, además en la función que ejecutará el observable */
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  // Función para eliminar los registros seleccionados (Abrir un dialog que diga que se puede eliminar todo, incluyendo lo que no aparece)
  eliminarSeleccionados() {
    const ids = this.selection.selected.map(empleo => empleo.id);
    // Aquí iría el código para eliminar los empleos seleccionados
    console.log(ids);
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
    // Con esto nos aseguramos que dataSource cargue antes
    if (!this.dataSource) {
      return false;
    }

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    // Con esto nos aseguramos que dataSource cargue antes, si no saldrá un undefined 'data' de la línea 127 const numRows
    if (!this.dataSource) {
      return;
    }

    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Ofertaempleo): string {
    // Con esto nos aseguramos que dataSource cargue antes
    if (!this.dataSource) {
      return '';
    }

    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
