import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Productcategory } from '../../models/productcategory';
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

@Component({
  selector: 'app-dashboardeditarcategoriaproducto',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardeditarcategoriaproducto.component.html',
  styleUrl: './dashboardeditarcategoriaproducto.component.scss'
})
export class DashboardeditarcategoriaproductoComponent implements OnInit, OnDestroy{

  FileEndpoint = environment.DriveEndpoint;
  categoria: Productcategory;
  idCategoria: number;
  imagenElegida: {id: number, nombre: string};
  suscripcion: Subscription;
  constructor(private productoService: ProductosService, private router: ActivatedRoute, private title: Title, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Editar Categoría de producto < EasyShop');
    this.idCategoria = this.router.snapshot.params['idcategoria'];
    this.getProductCategory(this.idCategoria);

    this.suscripcion = this.productoService.refresh$.subscribe(() => {
      this.getProductCategory(this.idCategoria);
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  editarCategoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    slug: new FormControl('', Validators.required),
    imagen_id: new FormControl(0, Validators.compose([Validators.required, Validators.minLength(1)]))
  });

  getProductCategory(id: number) {
    this.productoService.getCategoria(id).subscribe({
      next: (respuesta) => {
        this.categoria = respuesta.data;

        // Debemos primero comprobar que la respuesta de la api contiene imagen y no directamente 'categoría' porque si no, no se asignan el resto de datos
        if(respuesta.data.Imagen.length > 0) { 
          this.editarCategoriaForm.patchValue({
            nombre: this.categoria.Nombre,
            slug: this.categoria.Slug,
            imagen_id: this.categoria.Imagen[0].Id ?? 0
          })

          this.imagenElegida = {id: this.categoria.Imagen[0].Id, nombre: this.categoria.Imagen[0].Nombre_imagen}

        } else {
          this.editarCategoriaForm.patchValue({
            nombre: this.categoria.Nombre,
            slug: this.categoria.Slug
          })
        }

      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  editarProductCategory() {
    this.productoService.updateCategoria(this.idCategoria, this.editarCategoriaForm.value).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Categoría editada.', 'Aceptar', {
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
        this.editarCategoriaForm.patchValue({
          imagen_id: this.imagenElegida.id
        })
      }
    });
  }
}
