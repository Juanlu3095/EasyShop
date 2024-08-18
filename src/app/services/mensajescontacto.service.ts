import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { Mensajescontacto } from '../models/mensajescontacto';

type Apiresponse = { data: Mensajescontacto }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class MensajescontactoService {

  private _refresh$ = new Subject<void>(); // Observable
  public endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getAllMensajes() {
    return this.http.get<Mensajescontacto[]>(`${this.endpoint}/messages`);
  }

  getMensaje(idMensaje: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/messages/${idMensaje}`).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );
  }

  postMensaje(MensajeForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Mensajescontacto>(`${this.endpoint}/messages`, MensajeForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateMensaje(idMensaje: number, MensajeForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Mensajescontacto>(`${this.endpoint}/messages/${idMensaje}`, MensajeForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMensaje(idMensaje: number | Array<number>) {
    return this.http.delete<any>(`${this.endpoint}/messages/${idMensaje}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMensajes(idsMensaje: Array<number>) {
    return this.http.delete<any>(`${this.endpoint}/messages/${idsMensaje}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
