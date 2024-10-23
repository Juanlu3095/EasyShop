import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { Productcategory } from '../models/productcategory';
import { Marca } from '../models/marca';
import { Product } from '../models/product';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  /* CATEGORÍAS DE LOS PRODUCTOS */
  getCategorias() {
    return this.http.get<Apiresponse>(`${this.endpoint}/productcategories`);
  }

  getCategoria(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/productcategories/${id}`);
  }

  postCategoria(crearCategoriaForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Productcategory>(`${this.endpoint}/productcategories`, crearCategoriaForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateCategoria(id: number, editarCategoriaForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Productcategory>(`${this.endpoint}/productcategories/${id}`, editarCategoriaForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteCategoria(id: number) {
    return this.http.delete<Productcategory>(`${this.endpoint}/productcategories/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  /* MARCAS */
  getMarcas() {
    return this.http.get<Marca[]>(`${this.endpoint}/brand`);
  }

  getMarca(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/brand/${id}`).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  postBrand(crearBrandForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Marca>(`${this.endpoint}/brand`, crearBrandForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateBrand(id: number, editarBrandForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Marca>(`${this.endpoint}/brand/${id}`, editarBrandForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteBrand(id: any) {
    return this.http.delete<Marca>(`${this.endpoint}/brand/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  /* PRODUCTOS */
  getProductos() {
    return this.http.get<Apiresponse>(`${this.endpoint}/product`);
  }

  // Nos trae los últimos 5 productos publicados
  getProductosUltimasNovedades() {
    return this.http.get<Apiresponse>(`${this.endpoint}/novedades`);
  }

  getProducto(id: number) {
    return this.http.get<any>(`${this.endpoint}/product/${id}`).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  postProducto(postProductoForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Apiresponse>(`${this.endpoint}/product`, postProductoForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateProducto(id: number, editarProductoForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Product>(`${this.endpoint}/product/${id}`, editarProductoForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteProducto(id: number | Array<number>) {
    return this.http.delete<Product>(`${this.endpoint}/product/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
