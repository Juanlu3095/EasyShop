import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
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
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboardproductseditar',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardproductseditar.component.html',
  styleUrl: './dashboardproductseditar.component.scss'
})
export class DashboardproductseditarComponent implements OnInit, OnDestroy{

  imagenElegida: {id: number, nombre: string, ruta: string};
  archivoEndpoint = environment.FilesEndpoint;
  categorias: Productcategory[];
  marcas: Marca[];
  idProducto: number;
  producto: Product;
  suscripcion: Subscription;

  editarproductoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    precio_rebajado: new FormControl<number | null>(null, ),
    sku: new FormControl('', ),
    isbn_ean: new FormControl('', ),
    inventario: new FormControl<number | null>(null, ),
    descripcion_corta: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    imagen_id: new FormControl<number | null>(0, Validators.compose([Validators.minLength(1)])),
    categoria_id: new FormControl<number | null>(null, Validators.required),
    marca_id: new FormControl<number | null>(null, )
  });

  constructor(private title: Title,
    private productService: ProductosService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Editar producto < EasyShop');
    this.getCategorias();
    this.getMarcas();

    this.idProducto = Number(this.activatedRoute.snapshot.paramMap.get('idproducto')) ?? null;
    this.getProduct();

    this.suscripcion = this.productService.refresh$.subscribe(() => {
      this.getProduct();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
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
        this.editarproductoForm.patchValue({
          imagen_id: this.imagenElegida.id
        })
      }
    });
  }

  editarProducto() {
    if(this.editarproductoForm.valid) {
      console.log('Hola este es el form: ', this.editarproductoForm.value)
      this.productService.updateProducto(this.idProducto, this.editarproductoForm.value).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this._snackBar.open('Producto modificado.', 'Aceptar', {
            duration: 3000
          });
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

  getProduct() {
    this.productService.getProducto(this.idProducto).subscribe({
      next: (respuesta: Product) => {
        console.log(respuesta);
        this.producto = respuesta;

        // Debemos primero comprobar que la respuesta de la api contiene imagen y no directamente 'producto' porque si no, no se asignan el resto de datos
        if(respuesta.Imagen.length > 0) { 
          this.editarproductoForm.patchValue({
            nombre: this.producto.Nombre,
            descripcion: this.producto.Descripcion,
            precio: this.producto.Precio_euros,
            precio_rebajado: this.producto.Precio_rebajado_euros || null,
            sku: this.producto.SKU,
            isbn_ean: this.producto.ISBN_EAN,
            inventario: this.producto.Inventario || null,
            descripcion_corta: this.producto.Descripcion_corta,
            estado: this.producto.Estado_producto,
            imagen_id: this.producto.Imagen[0].Id ?? null,
            categoria_id: this.producto.Categoria_id || null,
            marca_id: this.producto.Marca_id || null
          })

          this.imagenElegida = {id: this.producto.Imagen[0].Id, nombre: this.producto.Imagen[0].Nombre_imagen, ruta: this.producto.Imagen[0].Ruta_archivo}

        } else {
          this.editarproductoForm.patchValue({
            nombre: this.producto.Nombre,
            descripcion: this.producto.Descripcion,
            precio: this.producto.Precio_euros,
            precio_rebajado: this.producto.Precio_rebajado_euros || null,
            sku: this.producto.SKU,
            isbn_ean: this.producto.ISBN_EAN,
            inventario: this.producto.Inventario || null,
            descripcion_corta: this.producto.Descripcion_corta,
            estado: this.producto.Estado_producto,
            categoria_id: this.producto.Categoria_id || null,
            marca_id: this.producto.Marca_id || null
          })
        }
      },
      error: (error) => {
        console.error(error);
      }
    })
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
