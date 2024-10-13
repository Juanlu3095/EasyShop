import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpheadersService {

  constructor() { }

  // Cabeceras para administador
  createHeadersAdmin() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json', // Lo que el front end acepta
        'Content-Type': 'application/json; charset=utf-8', // Lo que el back end recibe del front end
        'X-A-T': 'getProtectedData' // Nos permite luego diferenciar las peticiones a interceptar o no
      })
    }
  }

  // Cabeceras para administador con las que obtenemos cualquier tipo de respuesta
  createHeadersAdminAnyObject() {
    return {
      headers: new HttpHeaders({
        'X-A-T': 'getProtectedData' // Nos permite luego diferenciar las peticiones a interceptar o no
      })
    }
  }

  // Cabeceras para cliente
  createHeadersClient() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json', // Lo que el front end acepta
        'Content-Type': 'application/json; charset=utf-8', // Lo que el back end recibe del front end
        'X-C-T': 'getProtectedData' // Nos permite luego diferenciar las peticiones a interceptar o no
      })
    }
  }

  // Cabeceras para usuarios no logueados
  createHeadersGeneric() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json', // Lo que el front end acepta
        'Content-Type': 'application/json; charset=utf-8', // Lo que el back end recibe del front end
      })
    }
  }
}
