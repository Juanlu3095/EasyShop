import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
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
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import { Cv } from '../../models/cv';
import localeEs from '@angular/common/locales/es';
import { Subscription } from 'rxjs';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-dashboardempleocvs',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [CommonModule, MatCardModule, MatButton, MatFormFieldModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatTableModule, MatInputModule, MatSelectModule, MatDialogModule,],
  templateUrl: './dashboardempleocvs.component.html',
  styleUrl: './dashboardempleocvs.component.scss'
})
export class DashboardempleocvsComponent implements OnInit{

  idEmpleo: number | null;
  ofertaEmpleo: Ofertaempleo;
  dataSource: MatTableDataSource<Cv>;
  cvs: Cv[];
  suscripcion: Subscription;
  displayedColumns: string[] = ['select', 'nombre', 'apellidos', 'fecha', 'candidatura', 'acciones']; // Permite indicar las columnas a mostrar en el HTML

  constructor(private title: Title, private empleoService: OfertasempleoService, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.idEmpleo = Number(this.activatedroute.snapshot.paramMap.get('idempleo')); // convertimos idempleo de la ruta que es un string en un número

    if(this.idEmpleo) {
      this.getOfertayCVs(this.idEmpleo);

      // Manejo de la suscripción, cada vez que se ejecute, volverá a cargar las ofertas
    this.suscripcion = this.empleoService.refresh$.subscribe(() => {
      this.getOfertayCVs(this.idEmpleo);
    })
    }
    
    
  }

  // Obtenemos la oferta de empleo y los cvs inscritos
  getOfertayCVs(idEmpleo: number | null) {
    if(idEmpleo) {
      this.empleoService.getOferta(idEmpleo).subscribe({
        next: (respuesta) => {
          this.ofertaEmpleo = respuesta.data;
          this.title.setTitle(`${this.ofertaEmpleo.puesto} - CVs`);
  
          this.empleoService.getCVsPorOferta(this.ofertaEmpleo.id).subscribe({
            next: (response: any) => {
              console.log(response);
              this.cvs = response;
              this.dataSource = new MatTableDataSource(this.cvs);
            },
            error: (error) => {
              console.log(error);
            }
          })
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
    
  }
}
