import { Component, OnInit, LOCALE_ID, inject } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { OfertasempleoService } from '../../services/ofertasempleo.service';
import { Ofertaempleo } from '../../models/ofertaempleo';
import { Cv } from '../../models/cv';
import localeEs from '@angular/common/locales/es';
import { Subscription } from 'rxjs';
import { TableButton } from '../../models/tablebutton';
import { DasheditarcvComponent } from '../../modals/dashcv/dasheditarcv/dasheditarcv.component';
import { DasheliminarcvComponent } from '../../modals/dashcv/dasheliminarcv/dasheliminarcv.component';
import { DasheliminarseleccioncvComponent } from '../../modals/dashcv/dasheliminarseleccioncv/dasheliminarseleccioncv.component';
import { environment } from '../../../environments/environment.development';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-dashboardempleocvs',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, TablacompletaComponent],
  templateUrl: './dashboardempleocvs.component.html',
  styleUrl: './dashboardempleocvs.component.scss'
})
export class DashboardempleocvsComponent implements OnInit{

  idEmpleo: number | null;
  ofertaEmpleo: Ofertaempleo;
  cvs: Cv[];
  suscripcion: Subscription;
  columns: string[] = ['Nombre', 'Apellidos', 'Fecha', 'Candidatura']; // Permite indicar las columnas a mostrar en el HTML, deben coincidir con el Resource de Laravel
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  selectedIds: number[] = [];
  public fileEndpoint = environment.DriveDownloadEndpoint;

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.openDialogEditarCv(id) }, // () => para poder usar this..., le pasamos la id del mensaje
    {id: 2, nombre: 'Ver archivo', class: '', accion: (id:number) => this.abrirCv(id) },
    {id: 2, nombre: 'Eliminar', class: 'danger', accion: (id:number) => this.openDialogEliminarCv(id) },
  ]

  constructor(private title: Title, private empleoService: OfertasempleoService, private activatedroute: ActivatedRoute, private router: Router) {}

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
              this.cvs = response;
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

  // Inyectamos el dialog
  readonly dialog = inject(MatDialog);

  openDialogEditarCv(id: number) {
    this.dialog.open(DasheditarcvComponent, {
      data: {id: id}
    })
  }

  abrirCv(id: number) {
    this.empleoService.getCv(id).subscribe({
      next: (respuesta:Cv) => {
        window.open(`${this.fileEndpoint}${respuesta.Ruta_cv}`, '_blank'); // Abre url en otra pestaña para acceder al cv concreto
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  openDialogEliminarCv(id: number) {
    this.dialog.open(DasheliminarcvComponent, {
      data: {id: id}
    })
  }

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  openDialogEliminarSeleccionCv() {
    this.dialog.open(DasheliminarseleccioncvComponent, {
      data: {ids : this.selectedIds} 
    });
  }
}
