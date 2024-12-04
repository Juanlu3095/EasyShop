import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';
import { Pedido, Pedidoitem } from '../models/pedido';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  // PEDIDOS
  getPedidos() {
    return this.http.get<Apiresponse>(`${this.endpoint}/pedidos`, this.headersService.createHeadersAdmin());
  }

  getPedido(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/pedidos/${id}`, this.headersService.createHeadersAdmin()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  getEstados() {
    return this.http.get<Apiresponse>(`${this.endpoint}/estadospedido`, this.headersService.createHeadersAdmin());
  }

  // Creamos el pedido desde el cliente
  postPedido(pedido: any) {
    return this.http.post<Pedido>(`${this.endpoint}/pedidos`, pedido, this.headersService.createHeadersClient()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  // Creación del pedido desde el admin
  postPedidoAdmin(pedidoForm: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/pedidosadmin`, pedidoForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  // Actualizar pedido, si añadimos productos al pedido, actualizar el precio
  updatePedido(id: number, editarPedidoForm: any) {
    return this.http.put<Pedido>(`${this.endpoint}/pedidos/${id}`, editarPedidoForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deletePedido(id: number | Array<number>) {
    return this.http.delete<Pedido>(`${this.endpoint}/pedidos/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  // PEDIDOS ITEMS

  // Obtenemos los items dependiendo del id del pedido
  getPedidosItemByOrderId(idOrder: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/pedidositem/${idOrder}`, this.headersService.createHeadersAdmin()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  // Obtenemos un item del pedido usando la id del item
  getPedidoItemById(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/pedidoitem/${id}`, this.headersService.createHeadersAdmin()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  // Añadimos productos a un pedido existente
  postPedidoItem(pedidoitem: any) { // Añade pedidoItem a un pedido existente
    return this.http.post<Pedidoitem>(`${this.endpoint}/pedidoitem`, pedidoitem, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updatePedidoItem(idItem: number, editarPedidoItemForm: any) {
    return this.http.put<Pedidoitem>(`${this.endpoint}/pedidoitem/${idItem}`, editarPedidoItemForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deletePedidoItem(idItem: number | Array<number>) {
    return this.http.delete<Apiresponse>(`${this.endpoint}/pedidoitem/${idItem}`, this.headersService.createHeadersAdmin()).pipe(
      map( (respuesta) => {
        this.refresh$.next();
        return respuesta.data
      })
      
    );
  }
}
