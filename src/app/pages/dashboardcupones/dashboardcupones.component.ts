import { Component, OnInit, OnDestroy, TemplateRef, ViewChild, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS} from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { CuponesService } from '../../services/cupones.service';
import { Cupon } from '../../models/cupon';
import { TableButton } from '../../models/tablebutton';
import { DialogService } from '../../services/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

registerLocaleData(localeEs, 'es');

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-dashboardcupones',
  standalone: true,
  providers: [provideNativeDateAdapter(), /* {provide: LOCALE_ID, useValue: 'es'}, {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}, { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS } */],
  imports: [CommonModule, TablacompletaComponent, MatButton, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboardcupones.component.html',
  styleUrl: './dashboardcupones.component.scss'
})
export class DashboardcuponesComponent implements OnInit, OnDestroy{

  suscripcion: Subscription;
  cupones: Cupon[];
  nombreCupon: string;
  cuponEditar: Cupon;
  columns = ['Nombre', 'Tipo', 'Descuento', 'Limite_uso']; // Columnas que rellenamos los datos con la api
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  selectedIds: number[] = [];

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.editarCupon(id) },
    {id: 2, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.eliminarCupon(id)},
  ]

  @ViewChild('contentNuevo') modalNuevo!: TemplateRef<HTMLElement>;
  @ViewChild('contentEditar') modalEditar!: TemplateRef<HTMLElement>;
  @ViewChild('contentEliminar') modalEliminar!: TemplateRef<HTMLElement>; // El contenido a mostrar en el modal, opcional
  @ViewChild('contentEliminarSeleccion') modalEliminarSeleccion!: TemplateRef<HTMLElement>;

  cuponForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    codigo: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    tipo: new FormControl<string>('Fijo', Validators.compose([Validators.required, Validators.minLength(1)])),
    descuento: new FormControl<number>(0, Validators.required),
    descripcion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    estado_cupon: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    fecha_caducidad: new FormControl<any>(new Date(), Validators.required),
    gasto_minimo: new FormControl<number>(0, Validators.required),
    limite_uso: new FormControl<number>(0, Validators.required),
  });

  editarCuponForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    codigo: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    tipo: new FormControl<string>('Fijo', Validators.compose([Validators.required, Validators.minLength(1)])),
    descuento: new FormControl<number>(0, Validators.required),
    descripcion: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    estado_cupon: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    fecha_caducidad: new FormControl<any>(new Date(), Validators.required),
    gasto_minimo: new FormControl<number>(0, Validators.required),
    limite_uso: new FormControl<number>(0, Validators.required),
  })

  constructor(private title: Title, private cuponesService: CuponesService, private dialogService: DialogService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Cupones < EasyShop');
    this.getCupones();
    //this.getCupon();

   this.suscripcion = this.cuponesService.refresh$.subscribe( () => {
    this.getCupones();
   })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  nuevoCupon() {
    let title: string = 'Añadir cupón'; // Título del modal
    let btnClass = 'guardar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.modalNuevo, title, btnClass).then( (confirm) => {
      if(confirm && this.cuponForm.valid) {

        this.cuponForm.patchValue({
          fecha_caducidad: new Date(this.cuponForm.value.fecha_caducidad).toDateString()
        })

        this.cuponesService.postCupon(this.cuponForm.value).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Cupón creado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
       console.log('Nuevo cupón:', this.cuponForm.value);
      } else {
        return;
      }
    });
  }

  editarCupon(id: number) {
    let title: string = 'Editar cupón'; // Título del modal
    let btnClass = 'guardar'; // Clase para el botón de aceptar

    // Obtenemos la marca con la id que pasamos por parámetro
    this.cuponesService.getCupon(id).subscribe({
      next: (respuesta) => {
        console.log(respuesta.data[0]);
        this.cuponEditar = respuesta.data[0];
        
        // Inyectamos los valores del cupón en el formulario
        this.editarCuponForm.patchValue({
        nombre: this.cuponEditar.Nombre,
        codigo: this.cuponEditar.Codigo,
        tipo: this.cuponEditar.Tipo,
        descuento: this.cuponEditar.Descuento,
        descripcion: this.cuponEditar.Descripcion,
        estado_cupon: this.cuponEditar.Estado,
        fecha_caducidad: this.cuponEditar.Caducidad,
        gasto_minimo: this.cuponEditar.Gasto_minimo,
        limite_uso: this.cuponEditar.Limite_uso
    });
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.dialogService.openDialog(this.modalEditar, title, btnClass).then( (confirm) => {
      if(confirm ) {
        //let fechaCaducidad = new Date(String(this.editarCuponForm.value.fecha_caducidad).split('-').reverse().join('/')).toLocaleDateString() // Cambiar '-' por '/' dándole la vuelta a la fecha
        let fechaCaducidad = new Date(this.editarCuponForm.value.fecha_caducidad).toDateString();
        this.editarCuponForm.patchValue({
          fecha_caducidad: fechaCaducidad
        });
        this.cuponesService.updateCupon(id, this.editarCuponForm.value).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Cupón editado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
       console.log('Esto se envia:', this.editarCuponForm.value)
      } else {
        return;
      }
    });
  }

  eliminarCupon(id: number) {
    let title: string = 'Eliminar cupón'; // Título del modal
    let btnClass = 'aceptar'; // Clase para el botón de aceptar
    
    // Obtenemos la marca con la id que pasamos por parámetro
    this.cuponesService.getCupon(id).subscribe({
      next: (respuesta) => {
        this.nombreCupon = respuesta.data[0].Nombre;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.dialogService.openDialog(this.modalEliminar, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.cuponesService.deleteCupon(id).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Cupón eliminado.', 'Aceptar', {
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

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox, necesario para eliminar lo seleccionado
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  eliminarSeleccionCupones() {
    let title = 'Eliminar cupones seleccionados';
    let btnClass = 'aceptar'; // Clase para el botón de aceptar

    this.dialogService.openDialog(this.modalEliminarSeleccion, title, btnClass).then( (confirm) => {
      if(confirm) {
        this.cuponesService.deleteCupon(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._snackBar.open('Productos eliminados.', 'Aceptar', {
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

  getCupones() {
    this.cuponesService.getCupones().subscribe({
      next: (respuesta) => {
        console.log(respuesta.data);
        this.cupones = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  // Obtenemos un único elemento en un array
  getCupon() {
    this.cuponesService.getCupon(1).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        //this.cupones = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
