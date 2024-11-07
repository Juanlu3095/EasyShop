import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment.development';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-fichaproducto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule, MatIcon, MatButtonModule, MatExpansionModule, RouterLink, ReactiveFormsModule],
  templateUrl: './fichaproducto.component.html',
  styleUrl: './fichaproducto.component.scss'
})
export class FichaproductoComponent implements OnInit{

  // Esta variable sería la cantidad del producto que viene de la base de datos
  quantity:number
  idProducto: number;
  producto: Product;
  productosRelacionados: Product[] = [];
  endPointFile = environment.FilesEndpoint;

  constructor(private title: Title, private productService: ProductosService, private activatedRoute: ActivatedRoute, private route: Router, private carrito: CarritoService) {}

  addtocartForm = new FormGroup({
    cantidad: new FormControl<number>(1, Validators.compose([Validators.required, Validators.min(1)]))
  })

  ngOnInit(): void {
    this.idProducto = this.activatedRoute.snapshot.params['idProducto'];
    this.getProducto();
    
  }

  // Añadimos el producto al carrito
  addtocart(producto: Product) {
    if(this.addtocartForm.valid) {
      this.carrito.addNewProducto(producto, this.addtocartForm.value.cantidad || 1);
    }
    
  }

  getProducto() {
    this.productService.getProducto(this.idProducto).subscribe({
      next: (respuesta) => {
        this.producto = respuesta;

        // Habrá que obtener el nombre del producto desde la api directamente
        this.title.setTitle(`${this.producto.Nombre} | EasyShop`);
        this.getProductosRelacionados();
      },
      error: (error) => {
        if(error.status == 404) {
          this.route.navigate(['/notfound']); // Si el producto no existe, nos lleva a la página 404
        } else {
          console.error('Ha ocurrido un error');
        }
        
      }
    })
  }

  // Obtenemos productos relacionados: tendrán la misma categoría que el producto principal, pero se excluye el mismo con producto_id
  getProductosRelacionados() {
    let data = {
      categoria_id: this.producto.Categoria_id,
      producto_id: this.producto.Id
    }
    this.productService.getRelatedProducts(data).subscribe({
      next: (respuesta) => {
        this.productosRelacionados = respuesta.data;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
