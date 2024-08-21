import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsletterService } from '../../services/newsletter.service';
import { Newsletter } from '../../models/newsletter';
import { TablacompletaComponent } from "../../components/tablacompleta/tablacompleta.component";
import { CommonModule } from '@angular/common';
import { TableButton } from '../../models/tablebutton';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { DasheliminarseleccionnewsletterComponent } from '../../modals/dashnewsletters/dasheliminarseleccionnewsletter/dasheliminarseleccionnewsletter.component';
import { DasheditarnewsletterComponent } from '../../modals/dashnewsletters/dasheditarnewsletter/dasheditarnewsletter.component';
import { DasheliminarnewsletterComponent } from '../../modals/dashnewsletters/dasheliminarnewsletter/dasheliminarnewsletter.component';
import { DashnuevanewsletterComponent } from '../../modals/dashnewsletters/dashnuevanewsletter/dashnuevanewsletter.component';

@Component({
  selector: 'app-dashboardnewsletter',
  standalone: true,
  imports: [TablacompletaComponent, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './dashboardnewsletter.component.html',
  styleUrl: './dashboardnewsletter.component.scss'
})
export class DashboardnewsletterComponent implements OnInit{

  constructor(private title: Title, private newsletterService: NewsletterService, private router: Router) {}

  columns = ['Email', 'Fecha']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  data: Newsletter[];
  suscripcion: Subscription;
  selectedIds: number[] = [];

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.openDialogEditarNewsletter(id) }, // () => para poder usar this..., le pasamos la id del mensaje
    {id: 2, nombre: 'Eliminar', class: 'danger', accion: (id:number) => this.openDialogEliminarNewsletter(id) },
  ]

  ngOnInit(): void {
    this.title.setTitle('Newsletter < EasyShop');
    this.getNewsletters();
    
    this.suscripcion = this.newsletterService.refresh$.subscribe(() => {
      this.getNewsletters();
    })
  }

  // Obtenemos newsletters y las asignamos a la variable data
  getNewsletters() {
    this.newsletterService.getNewsletters().subscribe({
      next: (respuesta) => {
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

  openDialogNuevaNewsletter() {
    this.dialog.open(DashnuevanewsletterComponent);
  }

  // Ventana modal para editar newsletter
  openDialogEditarNewsletter(id: number) {
    this.dialog.open(DasheditarnewsletterComponent, {
      data: { id: id }
    });
  }

  // Ventana modal para eliminar newsletter
  openDialogEliminarNewsletter(id: number) {
    this.dialog.open(DasheliminarnewsletterComponent, {
      data: { id: id }
    });
  }

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  // Ventana modal para eliminar selección de newsletters con los checkbox
  openDialogEliminarSeleccionNewsletter() {
    this.dialog.open(DasheliminarseleccionnewsletterComponent, {
      data: {ids : this.selectedIds} 
    });
  }

  // Exportar a excel las suscripciones a la newsletter
  exportarNewsletter() {
    this.newsletterService.exportNewsletters().subscribe({
      next: (respuesta) => {
         // Creamos la URL del blob para hacerlo descargable en el navegador
        const url = URL.createObjectURL(respuesta);
        
        // Creamos el enlace para descargar el archivo
        const a = document.createElement('a'); // Crea un enlace <a>
        a.href = url; // Establecemos el href de ese <a>
        a.download = 'newsletters.xlsx'; // Nombramos al archivo que se descargará
        document.body.appendChild(a); // Insertamos el enlace al DOM
        a.click(); // Se simula un click en el <a> para iniciar la descarga
        
        // Limpiar
        document.body.removeChild(a); // Elimina el enlace de descarga en el DOM después de realizar la descarga
        window.URL.revokeObjectURL(url); // Liberamos memoria del navegador
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
