import { Component, inject, model, Inject, signal, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TablacompletaComponent } from '../../../components/tablacompleta/tablacompleta.component';
import { ImagenService } from '../../../services/imagen.service';
import { Image } from '../../../models/image';
import { TableButton } from '../../../models/tablebutton';

@Component({
  selector: 'app-dashseleccionarimagenproductcategory',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, TablacompletaComponent],
  templateUrl: './dashseleccionarimagenproductcategory.component.html',
  styleUrl: './dashseleccionarimagenproductcategory.component.scss'
})
export class DashseleccionarimagenproductcategoryComponent implements OnInit{

  readonly dialogRef = inject(MatDialogRef<DashseleccionarimagenproductcategoryComponent>);
  //readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly imagenSeleccionada = signal(this.data.imagenSeleccionada);

  columnImages = ['Archivo'];
  columns = ['Nombre', 'Estado']; // Columnas que rellenamos los datos con la api
  displayedColumns = [...this.columnImages,...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  datos: Image[]; // Los datos que insertamos en la tabla HTML

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Seleccionar', class: '', accion: (id:number) => this.seleccionarImagen(id) },
  ]

  constructor(private imagenService: ImagenService, @Inject(MAT_DIALOG_DATA) public data: {imagenSeleccionada: {id: number, nombre: string, ruta: File}}) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imagenService.getImages().subscribe({
      next: (respuesta) => {
        this.datos = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  seleccionarImagen(id: number) { // MUCHO OJO CON LAS MAYÚSCULAS EN EN LOS OBJETOS QUE NOS VIENEN DE LOS RESOURCES DE LARAVEL, DEBEN SER IGUALES A LOS DE TS
    const imagen = this.datos.find(({ Id }) => Id === id); // Busca en el array de datos el objeto con la id indicada como parámetro (id: number)
    
    if (imagen) {
      this.imagenSeleccionada.set({ id: imagen.Id, nombre: imagen.Nombre, ruta: imagen.Archivo }); // Guarda la imagen seleccionada en la signal 
    }
  
  }

  cerrarDialogo(): void {
    this.dialogRef.close(this.imagenSeleccionada());
  }
}
