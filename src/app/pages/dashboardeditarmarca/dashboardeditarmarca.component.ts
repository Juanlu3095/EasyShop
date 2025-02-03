import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DashseleccionarimagenproductcategoryComponent } from '../../modals/dashproductcategory/dashseleccionarimagenproductcategory/dashseleccionarimagenproductcategory.component';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marca } from '../../models/marca';

@Component({
  selector: 'app-dashboardeditarmarca',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardeditarmarca.component.html',
  styleUrl: './dashboardeditarmarca.component.scss'
})
export class DashboardeditarmarcaComponent implements OnInit, OnDestroy{

  FileEndpoint = environment.DriveEndpoint;
  marca: Marca;
  idMarca: number;
  imagenElegida: {id: number, nombre: string};
  suscripcion: Subscription;
  constructor(private productoService: ProductosService, private router: ActivatedRoute, private title: Title, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Editar Marca < EasyShop');
    this.idMarca = this.router.snapshot.params['idmarca'];
    this.getMarca(this.idMarca);

    this.suscripcion = this.productoService.refresh$.subscribe(() => {
      this.getMarca(this.idMarca);
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  editarMarcaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen_id: new FormControl(0, Validators.compose([Validators.required, Validators.minLength(1)]))
  });

  getMarca(id: number) {
    this.productoService.getMarca(id).subscribe({
      next: (respuesta) => {
        this.marca = respuesta;

        // Debemos primero comprobar que la respuesta de la api contiene imagen y no directamente 'categoría' porque si no, no se asignan el resto de datos
        if(respuesta.Imagen.length > 0) { 
          this.editarMarcaForm.patchValue({
            nombre: this.marca.Nombre,
            imagen_id: this.marca.Imagen[0].Id ?? 0
          })

          this.imagenElegida = {id: this.marca.Imagen[0].Id, nombre: this.marca.Imagen[0].Nombre_imagen}

        } else {
          this.editarMarcaForm.patchValue({
            nombre: this.marca.Nombre
          })
        }

      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarMarca() {
    this.productoService.updateBrand(this.idMarca, this.editarMarcaForm.value).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Marca editada.', 'Aceptar', {
          duration: 3000
        });
      },
      error: (error) => {
        this._snackBar.open(error.error.result, 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

  // Inyectamos el dialog
  readonly dialog = inject(MatDialog);
  readonly imagenSeleccionada = signal(''); // Para obtener la imagen seleccionada del modal

  openDialogSeleccionarImagen() {
    const dialogRef = this.dialog.open(DashseleccionarimagenproductcategoryComponent, {
      data: {imagenSeleccionada: {id: null, nombre: ''}},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.imagenSeleccionada.set(result); // Asignamos el valor a imagenSeleccionada cuando se cierra la ventana modal, tanto nombre como id
        this.imagenElegida = result;
        this.editarMarcaForm.patchValue({
          imagen_id: this.imagenElegida.id
        })
      }
    });
  }
}
