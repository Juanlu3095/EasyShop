import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';
import { Pedido } from '../models/pedido';

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

  // Actualizar pedido, si añadimos productos al pedido, actualizar el precio
  updatePedido(id: number) {
    
  }

  deletePedido(id: number | Array<number>) {
    return this.http.delete<Pedido>(`${this.endpoint}/pedidos/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  // PEDIDOS ITEMS

  getPedidoItemByOrderId(idOrder: number) {

  }

  getPedidoItemById(id: number) {

  }

  postPedidoItem(pedidoItemForm: any) { // Añade pedidoItem a un pedido existente

  }

  editPedidoItem(idItem: number) {

  }

  deletePedidoItem(idItem: number) {

  }
}
