import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Usuario } from '../models/usuario';
import { map, Observable, Subject, tap } from 'rxjs';
import { Rol } from '../models/rol';
import { HttpheadersService } from './httpheaders.service';

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

  constructor(private http: HttpClient, private httpheaders: HttpheadersService) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.endpoint}/usuario`, this.httpheaders.createHeadersAdmin());
  }

  getAllRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.endpoint}/roles`, this.httpheaders.createHeadersAdmin());
  }

  getUsuario(idUsuario: number): Observable<Usuario> {
    return this.http.get<Apiresponse>(`${this.endpoint}/usuario/${idUsuario}`, this.httpheaders.createHeadersAdmin()).pipe( 
      map( respuesta => {
        return respuesta.data;
      })
    );
  }

  postUsuario(crearUsuarioForm: any) {
    return this.http.post<Usuario>(`${this.endpoint}/usuario`, crearUsuarioForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateUsuario(id: number, editarUsuarioForm: any) {
    return this.http.put<Usuario>(`${this.endpoint}/usuario/${id}`, editarUsuarioForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteUsuario(id: number | Array<number>) {
    return this.http.delete<Usuario>(`${this.endpoint}/usuario/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
