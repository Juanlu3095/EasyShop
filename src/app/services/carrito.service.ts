import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Subject, tap, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productosCarrito: Product[] = this.cart || [];

  // Creamos el observable. BehaviorSubject emite un valor al iniciar la aplicación. Emite datos de tipo Product[]
  private _productos: BehaviorSubject<Product[]>;

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente del onAction de snackbar.

  constructor(private _snackBar: MatSnackBar) {
    this._productos = new BehaviorSubject<Product[]>(this.cart) // Inicializamos el objeto con el cart de localStorage
  }

  // Recuperamos nuestro BehaviorSubject desde fuera del servicio como un observable para suscribirnos al mismo
  get productos() {
    return this._productos; // Cada vez que accedemos a este observable, lo que hacemos es ver el carrito, ya que lo iniciamos en el contructor con this.cart
  }

  // Obtenemos el Observable para el matsnackbar
  get refresh$() {
    return this._refresh$.asObservable(); // asObservable() hace que los componentes que utilicen el getter no puedan emitir valores de vuelta usando next() -> Encapsulación
  }

  // Obtenemos el carrito
  get cart() {
    return JSON.parse(localStorage.getItem('cart') || '[]'); // localStorage es siempre un string, por lo que hay que transformarlo en array con JSON.parse. Importante '[]' y no '{}'
  }

  // Obtenemos el número de productos del carrito
  get quantity() {
    return this.productos
    .pipe(map(productos => {

      // Con reduce sumamos los valores de todos los precios empezando desde 0. Con Number convertimos todo en números para poder sumar correctamente
      return productos.reduce((prev, curr) => Number(prev) + Number( curr.cantidad), 0)
    }))
    .subscribe()
  }

  addNewProducto(producto: Product, cantidadProducto: number) {

    const productoExiste = this.productosCarrito.findIndex(item => item.Id === producto.Id); // La constante almacena el producto del array basado en la Id
    
    if(productoExiste >= 0) {
      this.productosCarrito[productoExiste].cantidad = Number(this.productosCarrito[productoExiste].cantidad) + Number(cantidadProducto); // Buscamos el producto que se repite y le aumentamos la cantidad en 1
      console.log('carrito:', this.productosCarrito);
    } else {
      let newItem: Product = { ...producto, cantidad: cantidadProducto} // Si no iniciamos la cantidad en 1 aquí, nos saldrá NaN
      this.productosCarrito.push(newItem); // Incluimos el nuevo producto que pasamos por parámetro al array
    }

    localStorage.setItem('cart', JSON.stringify(this.productosCarrito)); // Guardamos el nuevo array en localStorage

    // Anunciamos a nuestros suscriptores que se ha añadido un producto y emitimos el array de productos actualizado:
    this._productos.next(this.productosCarrito);

    this._snackBar.open('Producto añadido al carrito.', 'Ver carrito', {
      duration: 3000,
      
    }).onAction().pipe(
      tap(() => {
        this._refresh$.next() // se emitirá este observable para abrir el sidebar del carrito del header
      })
    ).subscribe() // Al cerrarse el snackbar, se limpia la suscripción automáticamente por su propia lógica. Si no usamos este subscribe() no se emite el observable
  }

  // Método para eliminar productos del carrito
  deleteProducto(index: number) {
    this.productosCarrito.splice(index, 1); // Con splice eliminamos elementos a partir del index, y sólo eliminamos 1 elemento
    localStorage.setItem('cart', JSON.stringify(this.productosCarrito));
    
    // Anunciamos a nuestros suscriptores que se ha eliminado un producto y emitimos el array de productos actualizado:
    this._productos.next(this.productosCarrito);
  }

  // Borrar productos del carrito
  deleteCarrito() {
    localStorage.setItem('cart', '[]');
    this.productosCarrito = []; // También hay que limpiar el array de productosCarrito, que es lo que se emite y no el localStorage como tal
    this._productos.next(this.productosCarrito);
  }
}
