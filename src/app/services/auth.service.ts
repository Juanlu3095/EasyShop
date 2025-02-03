import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpheadersService } from './httpheaders.service';
import { Usuario } from '../models/usuario';
import { Subject, tap } from 'rxjs';

// Ésta es la respuesta que recibimos de la api
type Apiresponse = {
  message: string,
  status: boolean,
  token?: string,
  data?: Usuario
}; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private httpheaders: HttpheadersService) { }
  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  loginUser(loginForm: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/userlogin`, loginForm, this.httpheaders.createHeadersGeneric())
  }

  registroUser(registroForm: any) {
    return this.http.post<any>(`${this.endpoint}/registro`, registroForm, this.httpheaders.createHeadersGeneric());
  }

  loginAdmin(loginForm: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/adminlogin`, loginForm, this.httpheaders.createHeadersGeneric())
  }

  // Obtenemos los datos del cliente logueado
  obtenerUser() {
    return this.http.get<Apiresponse>(`${this.endpoint}/dataclient`, this.httpheaders.createHeadersClient())
  }

  // Recoge el token y comprueba que ese token de usuario tenga permisos de administrador
  comprobarAdmin() {
    return this.http.post<Apiresponse>(`${this.endpoint}/comprobarusuario`, '', this.httpheaders.createHeadersAdmin())
  }

  // Busca en la base de datos el token de usuario y lo elimina de la misma
  logoutAdmin() {
    return this.http.post<Apiresponse>(`${this.endpoint}/cerrarsesion`, {}, this.httpheaders.createHeadersAdmin())
  }

  // Actualizar datos del usuario desde el panel de cliente
  updateCliente(updateClientDataForm: any) {
    return this.http.post<Apiresponse>(`${this.endpoint}/actualizarcliente`, updateClientDataForm, this.httpheaders.createHeadersClient()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  // Logout para los clientes, eliminando su correspondiente token
  logoutCliente() {
    return this.http.post<Apiresponse>(`${this.endpoint}/cerrarsesioncliente`, {}, this.httpheaders.createHeadersClient())
  }
  
}
