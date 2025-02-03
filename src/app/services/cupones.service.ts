import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, tap, map } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';
import { Cupon } from '../models/cupon';

type ApiresponseSolo = { result?: string, data: Cupon }; // Ésta es la respuesta que recibimos de la api con sólo un elemento
type ApiresponseArray = { result?: string, data: Cupon[] }; // Ésta es la respuesta que recibimos de la api con sólo un elemento

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  private endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getCuponPorCodigo(cuponForm: any) {
    return this.http.post<ApiresponseSolo>(`${this.endpoint}/codigocupon`, cuponForm, this.headersService.createHeadersGeneric())
  }

  getCupones() {
    return this.http.get<ApiresponseArray>(`${this.endpoint}/coupons`, this.headersService.createHeadersAdmin());
  }

  getCupon(id: number) {
    return this.http.get<ApiresponseArray>(`${this.endpoint}/coupons/${id}`, this.headersService.createHeadersAdmin());
  }

  postCupon(postCuponForm: any) {
    return this.http.post<Cupon>(`${this.endpoint}/coupons`, postCuponForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateCupon(id: number, editarCuponForm: any) {
    return this.http.put<Cupon>(`${this.endpoint}/coupons/${id}`, editarCuponForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteCupon(id: number | Array<number>) {
    return this.http.delete<Cupon>(`${this.endpoint}/coupons/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
