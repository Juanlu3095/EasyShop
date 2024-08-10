import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertasempleoService } from '../../../services/ofertasempleo.service';

@Component({
  selector: 'app-dasheliminarjobcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dasheliminarjobcategory.component.html',
  styleUrl: './dasheliminarjobcategory.component.scss'
})
export class DasheliminarjobcategoryComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number, nombre: string}, private empleoService: OfertasempleoService, private _snackBar: MatSnackBar) {}
  idCategoria: number | number[];
  nombreCategoria: string;

  ngOnInit(): void {
    this.nombreCategoria = this.data.nombre;
    this.idCategoria = this.data.id;
  }

  eliminarCategoria() {
    this.empleoService.deleteJobcategories(this.data.id).subscribe({
      next: (response) => {
        this._snackBar.open('Categoría eliminada.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        console.error('Ha ocurrido un error:', error);
      }
    })
  }
}
