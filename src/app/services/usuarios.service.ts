import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Usuario } from '../models/usuario';
import { map, Observable, Subject, tap } from 'rxjs';
import { Rol } from '../models/rol';

// Ésta es la respuesta que recibimos de la api
type Apiresponse = {
  success: boolean,
  message: string,
  data: Usuario
}; 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public endpoint = environment.ApiEndpoint;
  private _refresh$ = new Subject<void>(); // Observable

  constructor(private http: HttpClient) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.endpoint}/usuario`);
  }

  getAllRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.endpoint}/roles`);
  }

  getUsuario(idUsuario: number): Observable<Usuario> {
    return this.http.get<Apiresponse>(`${this.endpoint}/usuario/${idUsuario}`).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );
  }

  postUsuario(crearUsuarioForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Usuario>(`${this.endpoint}/usuario`, crearUsuarioForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateUsuario(id: number, editarUsuarioForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Usuario>(`${this.endpoint}/usuario/${id}`, editarUsuarioForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteUsuario(id: number | Array<number>) {
    return this.http.delete<Usuario>(`${this.endpoint}/usuario/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
