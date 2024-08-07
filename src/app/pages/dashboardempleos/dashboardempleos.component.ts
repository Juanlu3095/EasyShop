import { Component, OnInit, inject, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DashnuevoempleoComponent } from '../../components/dashnuevoempleo/dashnuevoempleo.component';
import { DasheditarempleoComponent } from '../../components/dasheditarempleo/dasheditarempleo.component';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-dashboardempleos',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [MatButton, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSelectModule, MatDialogModule, CommonModule],
  templateUrl: './dashboardempleos.component.html',
  styleUrl: './dashboardempleos.component.scss',
})
export class DashboardempleosComponent implements OnInit{

  empleos: Ofertaempleo[]; // Esto se suministrará a la tabla con [dataSource], la cual es menos limitada
  linkActivado: any = 'empleo';
  dataSource: MatTableDataSource<Ofertaempleo>;
  displayedColumns: string[] = ['select', 'id', 'puesto', 'provincia', 'jornada', 'fecha', 'acciones']; // Permite indicar las columnas a mostrar en el HTML

  constructor(private title: Title, private empleoservice: OfertasempleoService) {}

  /* PARA LA VENTANA MODAL DE AÑADIR NUEVO EMPLEO */
  readonly dialog = inject(MatDialog);

  openDialogNuevoEmpleo() {
    const dialogRef = this.dialog.open(DashnuevoempleoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /* MODAL PARA EDITAR EMPLEO */
  openDialogEditarEmpleo(id: number) {
    const dialogRef = this.dialog.open(DasheditarempleoComponent, {
      data: {id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Empleos < EasyShop');

    this.empleoservice.getAllOfertas().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.dataSource = new MatTableDataSource(respuesta);
        console.log(this.dataSource)
      },
      error: (error) => {
        console.error(error);
      }
    })

    const DATA = [
      {id: 1, puesto: 'Desarrollador web', provincia: 'Malaga', modalidad: 'teletrabajo', jornada: 'completa'},
      {id: 2, puesto: 'Comercial', provincia: 'Malaga', modalidad: 'presencial', jornada: 'completa'},
      {id: 3, puesto: 'Diseñador', provincia: 'Malaga', modalidad: 'híbrido', jornada: 'completa'},
      {id: 4, puesto: 'Diseñador', provincia: 'Malaga', modalidad: 'híbrido', jornada: 'completa'},
      {id: 5, puesto: 'Diseñador', provincia: 'Malaga', modalidad: 'híbrido', jornada: 'completa'},
      {id: 6, puesto: 'Diseñador', provincia: 'Malaga', modalidad: 'híbrido', jornada: 'completa'},
    ];
    //this.empleos = new MatTableDataSource(DATA);
  }

}
