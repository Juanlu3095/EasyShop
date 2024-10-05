import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

// Ésta es la respuesta que recibimos de la api
type Apiresponse = {
  message: string,
  status: boolean,
  token?: string
}; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  public endpoint = environment.ApiEndpoint;

  private TOKEN_A = this.cookieService.get('TOKEN_A');
  private TOKEN_C = this.cookieService.get('TOKEN_C');

  loginUser(loginForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
    var options = {headers: headers}
    return this.http.post<Apiresponse>(`${this.endpoint}/userlogin`, loginForm)
  }

  registroUser(registroForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
    var options = {headers: headers}
    return this.http.post<any>(`${this.endpoint}/registro`, registroForm, options);
  }

  loginAdmin(loginForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Apiresponse>(`${this.endpoint}/adminlogin`, loginForm, options)
  }

  // Recoge el token y comprueba que ese token de usuario tenga permisos de usuario. No va a ser necesario, se da prioridad a experiencia de usuario.
  // Además las rutas de Laravel que proporcionan los datos están protegidas.
  comprobarUser() {

  }

  // Recoge el token y comprueba que ese token de usuario tenga permisos de administrador
  comprobarAdmin() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'X-A-T': 'getProtectedData'
    })
    var options = {headers: headers};
    var body = {token: this.TOKEN_A}; // Para poder utilizar el token en Laravel, debemos pasarlo con una estructura JSON para después usar $request->token en laravel.
    return this.http.post<Apiresponse>(`${this.endpoint}/comprobarusuario`, body, options)
  }

  // Busca en la base de datos el token de usuario y lo elimina de la misma
  logoutAdmin() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'X-A-T': 'getProtectedData' // Nos permite luego diferenciar las peticiones a interceptar o no
    });
    var options = {headers: headers};
    return this.http.post<Apiresponse>(`${this.endpoint}/cerrarsesion`, {}, options)
  }

  // Logout para los clientes, eliminando su correspondiente token
  logoutCliente() {

  }
  
}
