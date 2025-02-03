import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, tap, map } from 'rxjs';
import { Productcategory } from '../models/productcategory';
import { Marca } from '../models/marca';
import { Product } from '../models/product';
import { HttpheadersService } from './httpheaders.service';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  /* CATEGORÍAS DE LOS PRODUCTOS */
  getCategorias() {
    return this.http.get<Apiresponse>(`${this.endpoint}/productcategories`, this.headersService.createHeadersGeneric());
  }

  getCategoria(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/productcategories/${id}`, this.headersService.createHeadersGeneric());
  }

  postCategoria(crearCategoriaForm: any) {
    return this.http.post<Productcategory>(`${this.endpoint}/productcategories`, crearCategoriaForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateCategoria(id: number, editarCategoriaForm: any) {
    return this.http.put<Productcategory>(`${this.endpoint}/productcategories/${id}`, editarCategoriaForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteCategoria(id: number) {
    return this.http.delete<Productcategory>(`${this.endpoint}/productcategories/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  /* MARCAS */
  getMarcas() {
    return this.http.get<Marca[]>(`${this.endpoint}/brand`, this.headersService.createHeadersGeneric());
  }

  getMarca(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/brand/${id}`, this.headersService.createHeadersGeneric()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  postBrand(crearBrandForm: any) {
    return this.http.post<Marca>(`${this.endpoint}/brand`, crearBrandForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateBrand(id: number, editarBrandForm: any) {
    return this.http.put<Marca>(`${this.endpoint}/brand/${id}`, editarBrandForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteBrand(id: any) {
    return this.http.delete<Marca>(`${this.endpoint}/brand/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  /* PRODUCTOS */
  // Obtenemos todos los productos, tanto los publicados como los que están en borrador
  getProductos() {
    return this.http.get<Apiresponse>(`${this.endpoint}/product`, this.headersService.createHeadersGeneric());
  }

  // Obtenemos los productos publicados
  getProductosPublicados() {
    return this.http.get<Apiresponse>(`${this.endpoint}/productospublicados`, this.headersService.createHeadersGeneric());
  }

  // Nos trae los últimos 5 productos publicados
  getProductosUltimasNovedades() {
    return this.http.get<Apiresponse>(`${this.endpoint}/novedades`, this.headersService.createHeadersGeneric());
  }

  // Obtener productos por el slug de la categoria
  getProductsByCategory(slug: string) {
    return this.http.get<Apiresponse>(`${this.endpoint}/productsByCategory/${slug}`, this.headersService.createHeadersGeneric());
  }

  // Obtener productos por el id de la marca
  getProductsByBrand(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/productsByBrand/${id}`, this.headersService.createHeadersGeneric());
  }

  // Obtenemos los productos relacionados en base a la categoria y al producto del body
  getRelatedProducts(data: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/relatedProducts`, data, this.headersService.createHeadersGeneric());
  }

  // Filtro de productos por categoria, marca y precio
  getProductsByFilter(filtroForm: any) {
    return this.http.post<Product[]>(`${this.endpoint}/filtrarProductos`, filtroForm, this.headersService.createHeadersGeneric()).pipe(
      map( (respuesta: any) => {
        return respuesta.result;
      })
    );
  }

  // Obtenemos productos por búsqueda
  getProductosBySearch(busqueda: string) {
    const params = new HttpParams().set('busqueda', busqueda);
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'})
    return this.http.get<Product[]>(`${this.endpoint}/buscarProductos`, {headers: headers, params: params}).pipe(
      map( (respuesta: any) => {
        return respuesta.result;
      })
    );
  }

  // Obtenemos productos por Array de Ids
  getProductosByIds(id: number | Array<number>) {
    return this.http.get<Apiresponse>(`${this.endpoint}/obtenerProductosId/${id}`, this.headersService.createHeadersGeneric()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    )
  }

  getProducto(id: number) {
    return this.http.get<any>(`${this.endpoint}/product/${id}`, this.headersService.createHeadersGeneric()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  postProducto(postProductoForm: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/product`, postProductoForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateProducto(id: number, editarProductoForm: any) {
    return this.http.put<Product>(`${this.endpoint}/product/${id}`, editarProductoForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteProducto(id: number | Array<number>) {
    return this.http.delete<Product>(`${this.endpoint}/product/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
