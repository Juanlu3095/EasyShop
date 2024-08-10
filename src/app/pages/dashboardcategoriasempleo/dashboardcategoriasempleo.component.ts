import { Component, OnInit, OnDestroy, inject, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Jobcategory } from '../../models/jobcategory';
import { Subscription } from 'rxjs';
import { DashnuevajobcategoryComponent } from '../../modals/dashjobcategory/dashnuevajobcategory/dashnuevajobcategory.component';
import { DasheditarjobcategoryComponent } from '../../modals/dashjobcategory/dasheditarjobcategory/dasheditarjobcategory.component';
import { DasheliminarjobcategoryComponent } from '../../modals/dashjobcategory/dasheliminarjobcategory/dasheliminarjobcategory.component';
import { DasheliminarseleccionjobcategoryComponent } from '../../modals/dashjobcategory/dasheliminarseleccionjobcategory/dasheliminarseleccionjobcategory.component';

@Component({
  selector: 'app-dashboardcategoriasempleo',
  standalone: true,
  imports: [MatButton, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSelectModule, MatDialogModule,],
  templateUrl: './dashboardcategoriasempleo.component.html',
  styleUrl: './dashboardcategoriasempleo.component.scss'
})
export class DashboardcategoriasempleoComponent implements OnInit, OnDestroy{

  categorias: Jobcategory[];
  suscripcion: Subscription;
  dataSource: MatTableDataSource<Jobcategory>;
  selection = new SelectionModel<Jobcategory>(true, []); // Para los checkbox
  displayedColumns: string[] = ['select', 'id', 'categoria', 'slug', 'acciones']; // Permite indicar las columnas a mostrar en el HTML
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; // Hace referencia a mat-paginator en el HTML. Añadimos {static:true} para cambiar el label de registros por página.
  @ViewChild(MatSort) sort: MatSort; // Hace referencia a mat-sort en el HTML

  constructor(private title: Title, private ofertaService: OfertasempleoService) {}

  // Inyectamos el MatDialog
  readonly dialog = inject(MatDialog);

  // Modal nueva categoría
  openDialogNuevaCategoria() {
    this.dialog.open(DashnuevajobcategoryComponent);
  }

  // Modal editar categoría
  openDialogEditarCategoria(id: number) {
    this.dialog.open(DasheditarjobcategoryComponent, {
      data: {id : id}
    });
  }

  // Modal eliminar categoría
  openDialogEliminarCategoria(id: number, nombre: string) {
    this.dialog.open(DasheliminarjobcategoryComponent, {
      data: {id : id, nombre: nombre}
    });
  }

  // Modal eliminar selección categoría
  openDialogEliminarSeleccionCategoria() {
    const ids = this.selection.selected.map(empleo => empleo.id); // Obtenemos los ids de los empleos seleccionados
    this.dialog.open(DasheliminarseleccionjobcategoryComponent, {
      data: {ids : ids}
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Categorías Empleo < EasyShop');
    this.paginator._intl.itemsPerPageLabel = "Registros por página:"; // Cambiamos el label 'Items per page'
    this.paginator._intl.previousPageLabel = "Anterior";
    this.paginator._intl.nextPageLabel = "Siguiente";
    this.getJobcategories();
    
    // Manejo de la suscripción, cada vez que se ejecute, volverá a cargar las ofertas
    this.suscripcion = this.ofertaService.refresh$.subscribe(() => {
      this.getJobcategories();
    })
  }

  // Desuscripción del observable para evitar fugas de memoria, se ejecuta al cambiar de página.
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getJobcategories() {
    this.ofertaService.getAllJobcategories().subscribe({
      next: (respuesta) => {
        this.categorias = respuesta;
        this.dataSource = new MatTableDataSource(this.categorias);

        // Establece las páginas analizando el dataSource que es el que contiene las categorías
        /* El paginador y el sort hay que ponerlos después de inyectar las categorías en dataSource, además en la función que ejecutará el observable */
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error(error);
      }
    })
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
  checkboxLabel(row?: Jobcategory): string {
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
