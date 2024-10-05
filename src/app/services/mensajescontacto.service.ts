import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Mensajescontacto } from '../models/mensajescontacto';

type Apiresponse = { data: Mensajescontacto }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class MensajescontactoService {

  private _refresh$ = new Subject<void>(); // Observable
  public endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getAllMensajes() {
    return this.http.get<Mensajescontacto[]>(`${this.endpoint}/messages`, this.createHeaders());
  }

  getMensaje(idMensaje: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/messages/${idMensaje}`, this.createHeaders()).pipe(
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
    return this.http.put<Mensajescontacto>(`${this.endpoint}/messages/${idMensaje}`, MensajeForm, this.createHeaders()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMensaje(idMensaje: number | Array<number>) {
    return this.http.delete<Mensajescontacto>(`${this.endpoint}/messages/${idMensaje}`, this.createHeaders()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteMensajes(idsMensaje: Array<number>) {
    return this.http.delete<Mensajescontacto[]>(`${this.endpoint}/messages/${idsMensaje}`, this.createHeaders()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'X-A-T': 'getProtectedData' // Nos permite luego diferenciar las peticiones a interceptar o no
      })
    }
  }
}
