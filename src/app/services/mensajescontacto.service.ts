import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { Mensajescontacto } from '../models/mensajescontacto';
import { HttpheadersService } from './httpheaders.service';

type Apiresponse = { data: Mensajescontacto }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class MensajescontactoService {

  private _refresh$ = new Subject<void>(); // Observable
  public endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient, private httpheaders: HttpheadersService) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getAllMensajes() {
    return this.http.get<Mensajescontacto[]>(`${this.endpoint}/messages`, this.httpheaders.createHeadersAdmin());
  }

  getMensaje(idMensaje: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/messages/${idMensaje}`, this.httpheaders.createHeadersAdmin()).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );
  }

  postMensaje(MensajeForm: any) {
    return this.http.post<Mensajescontacto>(`${this.endpoint}/messages`, MensajeForm, this.httpheaders.createHeadersGeneric()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateMensaje(idMensaje: number, MensajeForm: any) {
    return this.http.put<Mensajescontacto>(`${this.endpoint}/messages/${idMensaje}`, MensajeForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMensaje(idMensaje: number | Array<number>) {
    return this.http.delete<Mensajescontacto>(`${this.endpoint}/messages/${idMensaje}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMensajes(idsMensaje: Array<number>) {
    return this.http.delete<Mensajescontacto[]>(`${this.endpoint}/messages/${idsMensaje}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

}
