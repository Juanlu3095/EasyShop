import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { DialogService } from '../../services/dialog.service';
import { ProductosService } from '../../services/productos.service';
import { Subscription } from 'rxjs';
import { TableButton } from '../../models/tablebutton';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Marca } from '../../models/marca';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashseleccionarimagenproductcategoryComponent } from '../../modals/dashproductcategory/dashseleccionarimagenproductcategory/dashseleccionarimagenproductcategory.component';

@Component({
  selector: 'app-dashboardmarcas',
  standalone: true,
  imports: [TablacompletaComponent, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboardmarcas.component.html',
  styleUrl: './dashboardmarcas.component.scss'
})
export class DashboardmarcasComponent implements OnInit, OnDestroy{

  constructor(private title: Title, private dialogService: DialogService, private productoService: ProductosService, private _snackBar: MatSnackBar, private router: Router) {}

  @ViewChild('contentEliminar') modalEliminar!: TemplateRef<HTMLElement>; // El contenido a mostrar en el modal, opcional
  @ViewChild('contentEliminarSeleccion') modalEliminarSeleccion!: TemplateRef<HTMLElement>; 
  suscripcion: Subscription;
  marcas: Marca[]; // El array de marcas que se añade a la tabla
  columns = ['Nombre',]; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  imagenElegida: {id: number, nombre: string}; // Para la selección de la imagen
  nombreMarca: string;
  selectedIds: number[] = [];

  crearMarcaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen_id: new FormControl(0, Validators.compose([Validators.minLength(1)])) ?? null
  });
  
  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (Id:number) => this.editarMarca(Id) }, // HAY QUE USAR RESOURCE PARA QUE DETECTE LA 'Id' QIE ES LO QUE INDICAMOS EN TABLACOMPLETA
    {id: 2, nombre: 'Eliminar', class: 'danger', accion: (Id:number, Nombre: string) => this.eliminarDialog(Id)},
  ]

  ngOnInit(): void {
    this.title.setTitle('Marcas < EasyShop')
    this.getMarcas();

    this.suscripcion = this.productoService.refresh$.subscribe(() => {
      this.getMarcas();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getMarcas() {
    this.productoService.getMarcas().subscribe({
      next: (respuesta) => {
        this.marcas = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  crearMarca() {
    if(this.crearMarcaForm.valid) {
      this.productoService.postBrand(this.crearMarcaForm.value).subscribe({
        next: (response) => {
          this._snackBar.open('Marca creada.', 'Aceptar', {
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

  editarMarca(id: number) {
    this.router.navigate(['dashboard/marcas', id])
  }

  eliminarDialog(id: number) {
    let title: string = 'Eliminar marca'; // Título del modal
    let btnClass = 'aceptar'; // Clase para el botón de aceptar
    
    // Obtenemos la marca con la id que pasamos por parámetro
    this.productoService.getMarca(id).subscribe({
      next: (respuesta: Marca) => {
        this.nombreMarca = respuesta.Nombre;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.dialogService.openDialog(this.modalEliminar, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.productoService.deleteBrand(id).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Marca eliminada.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    });
  }

  eliminarSeleccionDialog() {
    let title = 'Eliminar marcas seleccionadas';
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.modalEliminarSeleccion, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.productoService.deleteBrand(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Marcas eliminadas.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      } else {
        return;
      }
    })
  }

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox, necesario para eliminar lo seleccionado
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  // Inyectamos el dialog para seleccionar imagen
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
        
        this.crearMarcaForm.patchValue({
          imagen_id: this.imagenElegida.id
        })
      }
    });
  }

}
