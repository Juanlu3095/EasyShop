import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../../models/image';
import { ImagenService } from '../../../services/imagen.service';
import { environment } from '../../../../environments/environment.development';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-dasheditarmedia',
  standalone: true,
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dasheditarmedia.component.html',
  styleUrl: './dasheditarmedia.component.scss'
})
export class DasheditarmediaComponent implements OnInit{

  imagen: Image;
  storageEndpoint = environment.FilesEndpoint;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private imageService: ImagenService, private _snackBar: MatSnackBar) {}

  editarImagenForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    alt: new FormControl(''),
    leyenda: new FormControl(''),
    descripcion: new FormControl(''),
  });

  ngOnInit(): void {
    this.getImagen(this.data.id);
  }

  getImagen(idImagen: number) {
    this.imageService.getImage(idImagen).subscribe({
      next: (respuesta) => {
        console.log(respuesta.data);
        this.imagen = respuesta.data;

        // Inyectamos los valores actuales del formulario antes de editar
        this.editarImagenForm.patchValue({
          nombre: this.imagen.nombre,
          alt: this.imagen.alt,
          leyenda: this.imagen.leyenda,
          descripcion: this.imagen.descripcion,
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarImagen() {
    if(this.editarImagenForm.valid) {
      this.imageService.updateImage(this.data.id, this.editarImagenForm.value).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Imagen editada.', 'Aceptar', {
            duration: 3000
          })
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  eliminarImagen() {
    let confirmar = confirm('Una vez elimines esta imagen no podrás recuperarla, ¿estás seguro de que quieres eliminar este archivo?'); // Para crear un modal para editar y se puede borrar la imagen desde ese mismo modal.
    if(confirmar) {
      this.imageService.deleteImage(this.data.id).subscribe({
        next: (respuesta) => {
          this._snackBar.open('Imagen eliminada.', 'Aceptar', {
            duration: 3000
          })
        },
        error: (error) => {
          console.error(error);
        }
      })
    }else {
      console.log('adios');
    }
  }
}
