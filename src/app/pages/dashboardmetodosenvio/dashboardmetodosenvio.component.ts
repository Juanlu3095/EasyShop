import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { TablacompletaComponent } from '../../components/tablacompleta/tablacompleta.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TableButton } from '../../models/tablebutton';
import { MetodosenvioService } from '../../services/metodosenvio.service';
import { Metodoenvio } from '../../models/metodoenvio';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dashboardmetodosenvio',
  standalone: true,
  imports: [TablacompletaComponent, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dashboardmetodosenvio.component.html',
  styleUrl: './dashboardmetodosenvio.component.scss'
})
export class DashboardmetodosenvioComponent implements OnInit, OnDestroy{

  metodosenvio: Metodoenvio[];
  metodoenvio: Metodoenvio | null;
  columns = ['Id', 'Nombre', 'Precio'];
  displayedColumns = ['select',...this.columns, 'acciones']; // Columnas que vamos a mostrar, que incluyen p.ej. checkbox y acciones
  selectedIds: number[] = [];
  suscripcion: Subscription;

  @ViewChild('contentNuevo') modalNuevo!: TemplateRef<HTMLElement>;
  @ViewChild('contentEditar') modalEditar!: TemplateRef<HTMLElement>;
  @ViewChild('contentEliminar') modalEliminar!: TemplateRef<HTMLElement>;
  @ViewChild('contentEliminarSeleccion') modalEliminarSeleccion!: TemplateRef<HTMLElement>;

  // Botones para las acciones de la tabla
  public botones: TableButton[] = [
    {id: 1, nombre: 'Editar', class: '', accion: (id:number) => this.editarMetodoenvio(id) },
    {id: 2, nombre: 'Eliminar',class: 'danger', accion: (id: number) => this.eliminarMetodoenvio(id)},
  ]

  nuevoMetodoenvioForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    precio: new FormControl<number>(0, Validators.compose([Validators.required, Validators.min(0)]))
  })
  
  editarMetodoenvioForm = new FormGroup({
    nombre: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(1)])),
    precio: new FormControl<number>(0, Validators.compose([Validators.required, Validators.min(0)]))
  })

  constructor(private title: Title, private metodoEnvioService: MetodosenvioService, private dialogService: DialogService, private _matSnackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.title.setTitle('Métodos de envío < EasyShop');
    this.getMetodosenvio();

    this.suscripcion = this.metodoEnvioService.refresh$.subscribe(() => {
      this.getMetodosenvio();
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  nuevoMetodoenvio() {
    let title = 'Añadir método de envío';
    let btnClass = 'guardar';

    this.dialogService.openDialog(this.modalNuevo, title, btnClass).then((confirm) => {
      if(confirm && this.nuevoMetodoenvioForm.valid) {
        this.metodoEnvioService.postMetodoenvio(this.nuevoMetodoenvioForm.value).subscribe({
          next: (respuesta) => {
            this._matSnackbar.open('Método de envío creado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._matSnackbar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      }
    })
  }

  editarMetodoenvio(id: number) {
    let title = 'Editar método de envío';
    let btnClass = 'guardar';

    this.metodoEnvioService.getMetodoenvio(id).subscribe({
      next: (respuesta) => {
        this.metodoenvio = respuesta.data;

        this.editarMetodoenvioForm.patchValue({
          nombre: this.metodoenvio?.Nombre,
          precio: this.metodoenvio?.Precio
        });
      },
      error: (error) => {
        this._matSnackbar.open('Ha ocurrido un error.', 'Aceptar', {
          duration: 3000
        });
      }
    })

    this.dialogService.openDialog(this.modalEditar, title, btnClass).then((confirm) => {
      if(confirm && this.editarMetodoenvioForm.valid) {
        this.metodoEnvioService.updateMetodoenvio(id, this.editarMetodoenvioForm.value).subscribe({
          next: (respuesta) => {
            this._matSnackbar.open('Método de envío actualizado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._matSnackbar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      }
    })
  }

  eliminarMetodoenvio(id: number) {
    this.metodoenvio = this.metodosenvio.find(item => item.Id === id) ?? null;

    let title = 'Eliminar método de envío';
    let btnClass = 'aceptar';
    this.dialogService.openDialog(this.modalEliminar, title, btnClass).then((confirm) => {
      if(confirm) {
        this.metodoEnvioService.deleteMetodoenvio(id).subscribe({
          next: (respuesta) => {
            this._matSnackbar.open('Método de envío eliminado.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._matSnackbar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      }
    })
  }

  // Método que se ejecuta cuando cambia la selección en el hijo para los checkbox, necesario para eliminar lo seleccionado
  onSelectionChange(ids: number[]) {
    this.selectedIds = ids;
  }

  eliminarSeleccionMetodoenvio() {
    let title = 'Eliminar métodos de envío seleccionados';
    let btnClass = 'aceptar';

    this.dialogService.openDialog(this.modalEliminarSeleccion, title, btnClass).then((confirm) => {
      if(confirm) {
        this.metodoEnvioService.deleteMetodoenvio(this.selectedIds).subscribe({
          next: (respuesta) => {
            this._matSnackbar.open('Métodos de envío eliminados.', 'Aceptar', {
              duration: 3000
            });
          },
          error: (error) => {
            this._matSnackbar.open('Ha ocurrido un error.', 'Aceptar', {
              duration: 3000
            });
          }
        })
      }
    })
  }

  getMetodosenvio() {
    this.metodoEnvioService.getMetodosenvio().subscribe({
      next: (respuesta) => {
        this.metodosenvio = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
