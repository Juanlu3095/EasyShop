import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Metodoenvio } from '../models/metodoenvio';
import { HttpheadersService } from './httpheaders.service';
import { Subject, tap } from 'rxjs';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class MetodosenvioService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getMetodosenvio() {
    return this.http.get<Apiresponse>(`${this.endpoint}/metodosenvio`, this.headersService.createHeadersGeneric());
  }

  getMetodoenvio(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/metodosenvio/${id}`, this.headersService.createHeadersAdmin());
  }

  postMetodoenvio(metodoenvioForm: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/metodosenvio`, metodoenvioForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateMetodoenvio(id: number, metodoenvioForm: any) {
    return this.http.put<Apiresponse>(`${this.endpoint}/metodosenvio/${id}`, metodoenvioForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMetodoenvio(id: number | Array<number>) {
    return this.http.delete<Apiresponse>(`${this.endpoint}/metodosenvio/${id}`, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
