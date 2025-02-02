import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Image } from '../../../models/image';
import { ImagenService } from '../../../services/imagen.service';

@Component({
  selector: 'app-dashnuevamedia',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashnuevamedia.component.html',
  styleUrl: './dashnuevamedia.component.scss'
})
export class DashnuevamediaComponent {

  images: Image[] = [];

  constructor(private imageService: ImagenService, private _snackBar: MatSnackBar) {}

  crearImagenForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    leyenda: new FormControl('', Validators.required),
  });

  crearImagen() {
    let datos = new FormData();

    if(this.crearImagenForm.valid) {
      datos.append('nombre', this.crearImagenForm.value.nombre ?? '');
      datos.append('alt', this.crearImagenForm.value.alt ?? '');
      datos.append('descripcion', this.crearImagenForm.value.descripcion ?? '');
      datos.append('leyenda', this.crearImagenForm.value.leyenda ?? '');
  
        // Agrega el archivo desde fileformData
        const file = this.fileformData.get('archivo') as File;
        if (file) {
          datos.append('archivo', file); // "archivo" viene del form html
          
        } else {
          console.error('No se ha seleccionado ningún archivo.');
          return; // No continuar si no hay archivo
        }

        this.imageService.postImage(datos).subscribe({
          next: (respuesta: any) => {
            console.log(respuesta)
            this._snackBar.open('Imagen creada.', 'Aceptar', {
              duration: 3000
            })
          },
          error: (error) => {
            console.error(error);
            
            this._snackBar.open('El archivo no se ha podido procesar.', 'Aceptar', {
              duration: 3000
            })
          }
        })
    }
    
  }

  // Para obtener los datos del input de tipo file y combinarlo con el formGroup
  fileformData = new FormData();

  // Función para escuchar cuando se selecciona un archivo en el input de tipo file
  getFile(event: Event) {
    const target = event.target as HTMLInputElement;

    const files: FileList | null = target.files; // Obtiene los archivos

    if(files!.length > 0 && files != null) {
      
      const file = files[0];

      this.fileformData.set("archivo", file);

    }
  }
}
