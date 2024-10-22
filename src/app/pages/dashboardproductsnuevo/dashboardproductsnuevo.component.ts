import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DashseleccionarimagenproductcategoryComponent } from '../../modals/dashproductcategory/dashseleccionarimagenproductcategory/dashseleccionarimagenproductcategory.component';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment.development';
import { Productcategory } from '../../models/productcategory';
import { Marca } from '../../models/marca';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardproductsnuevo',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardproductsnuevo.component.html',
  styleUrl: './dashboardproductsnuevo.component.scss'
})
export class DashboardproductsnuevoComponent implements OnInit{

  imagenElegida: {id: number, nombre: string, ruta: File};
  archivoEndpoint = environment.FilesEndpoint;
  categorias: Productcategory[];
  marcas: Marca[];

  nuevoproductoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    precio_rebajado: new FormControl(null, ),
    sku: new FormControl('', ),
    isbn_ean: new FormControl('', ),
    inventario: new FormControl(null, ),
    descripcion_corta: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    imagen_id: new FormControl(0, Validators.compose([Validators.minLength(1)])),
    categoria_id: new FormControl(null, Validators.required),
    marca_id: new FormControl(null, )
  });

  constructor(private title: Title,
    private productService: ProductosService,
    private _snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.title.setTitle('Nuevo producto < EasyShop');
    this.getCategorias();
    this.getMarcas();
  }

  // Inyectamos el dialog
  readonly dialog = inject(MatDialog);
  readonly imagenSeleccionada = signal(''); // Para obtener la imagen seleccionada del modal

  openDialogSeleccionarImagen() {
    const dialogRef = this.dialog.open(DashseleccionarimagenproductcategoryComponent, {
      data: {imagenSeleccionada: {id: null, nombre: '', ruta: ''}},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.imagenSeleccionada.set(result); // Asignamos el valor a imagenSeleccionada cuando se cierra la ventana modal, tanto nombre como id
        this.imagenElegida = result;
        console.log(result);
        this.nuevoproductoForm.patchValue({
          imagen_id: this.imagenElegida.id
        })
      }
    });
  }

  crearProducto() {
    if(this.nuevoproductoForm.valid) {
      this.productService.postProducto(this.nuevoproductoForm.value).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this._snackBar.open('Producto creado.', 'Aceptar', {
            duration: 3000
          });
          // Nos envía directamente a la página de edición del producto creado
          this.router.navigate(['dashboard/productos/', respuesta.data]);
        },
        error: (error) => {
          console.error(error);
          this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
            duration: 3000
          });

        }
      })
    } else {
      console.error('Form no válido')
    }
  }

  getMarcas(){
    this.productService.getMarcas().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.marcas = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getCategorias(){
    this.productService.getCategorias().subscribe({
      next: (respuesta) => {
        console.log(respuesta.data);
        this.categorias = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
