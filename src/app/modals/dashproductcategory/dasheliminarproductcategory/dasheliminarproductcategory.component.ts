import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosService } from '../../../services/productos.service';
import { Productcategory } from '../../../models/productcategory';

@Component({
  selector: 'app-dasheliminarproductcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dasheliminarproductcategory.component.html',
  styleUrl: './dasheliminarproductcategory.component.scss'
})
export class DasheliminarproductcategoryComponent implements OnInit{

  categoria: Productcategory;

  constructor(private productService: ProductosService, @Inject(MAT_DIALOG_DATA) public data: {id: number}, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria() {
    this.productService.getCategoria(this.data.id).subscribe({
      next: (respuesta) => {
        this.categoria = respuesta.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  eliminarCategoria() {
    this.productService.deleteCategoria(this.data.id).subscribe({
      next: (respuesta) => {
        this._snackBar.open('Categoría eliminada.', 'Aceptar', {
          duration: 3000
        })
      },
      error: (error) => {
        this._snackBar.open('Ha ocurrido un error.', 'Aceptar', {
          duration: 3000
        })
      }
    })
  }
}
