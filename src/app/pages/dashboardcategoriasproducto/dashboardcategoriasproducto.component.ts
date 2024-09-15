import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductosService } from '../../services/productos.service';
import { Productcategory } from '../../models/productcategory';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { CommonModule } from '@angular/common';
import { TableButton } from '../../models/tablebutton';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashseleccionarimagenproductcategoryComponent } from '../../modals/dashproductcategory/dashseleccionarimagenproductcategory/dashseleccionarimagenproductcategory.component';
import { DasheliminarproductcategoryComponent } from '../../modals/dashproductcategory/dasheliminarproductcategory/dasheliminarproductcategory.component';

@Component({
  selector: 'app-dashboardcategoriasproducto',
  standalone: true,
  imports: [TablacompletaComponent, CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardcategoriasproducto.component.html',
  styleUrl: './dashboardcategoriasproducto.component.scss'
})
export class DashboardcategoriasproductoComponent implements OnInit, OnDestroy{

  suscripcion: Subscription;
  categorias: Productcategory;
  columns = ['Nombre', 'Slug',]; // Columnas que rellenamos los datos con la api
  displayedColumns = [...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  data: Productcategory[]; // Los datos que insertamos en la tabla HTML
  imagenElegida: {id: number, nombre: string};

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.abrirEditarCategoria(id) },
    {id: 2, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.openDialogEliminarCategoria(id)},
  ]

  constructor(private title: Title, private productService: ProductosService, private _snackBar: MatSnackBar, private router: Router) {}

  crearCategoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    slug: new FormControl('', Validators.required),
    imagen_id: new FormControl(0, Validators.compose([Validators.minLength(1)])) ?? null
  })

  ngOnInit(): void {
    this.title.setTitle('Categorías de producto < EasyShop');
    this.getProductcategories();

    this.suscripcion = this.productService.refresh$.subscribe(() => {
      this.getProductcategories();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getProductcategories() {
    this.productService.getCategorias().subscribe({
      next: (respuesta) => {
        this.data = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  crearProductcategory() {
    if(this.crearCategoriaForm.valid) {
      this.productService.postCategoria(this.crearCategoriaForm.value).subscribe({
        next: (response) => {
          this._snackBar.open('Categoría creada.', 'Aceptar', {
            duration: 3000
          })
        },
        error: (error) => {
          this._snackBar.open(error.error.result, 'Aceptar', {
            duration: 3000
          })
        }
      })
    }
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
        
        this.crearCategoriaForm.patchValue({
          imagen_id: this.imagenElegida.id
        })
      }
    });
  }

  abrirEditarCategoria(id: number) {
    this.router.navigate(['dashboard/categoriasproducto', id])
  }

  openDialogEliminarCategoria(id: number) { // Al contrario que en dashboardempleos, no podemos pasar directamente el nombre, porque pasamos los botones por un bucle for, y deben ser iguales.
    this.dialog.open(DasheliminarproductcategoryComponent, {
      data: { id: id }
    });
  }

}
