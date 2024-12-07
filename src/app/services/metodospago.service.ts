import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';
import { Metodopago } from '../models/metodopago';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class MetodospagoService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getMetodosPago() {
    return this.http.get<Apiresponse>(`${this.endpoint}/metodopago`, this.headersService.createHeadersAdmin());
  }

  getMetodosPagoDisponibles() {
    return this.http.get<Apiresponse>(`${this.endpoint}/pagosdisponibles`, this.headersService.createHeadersGeneric());
  }

  getMetodoPago(slug: string) {
    return this.http.get<Apiresponse>(`${this.endpoint}/metodopago/${slug}`, this.headersService.createHeadersAdmin());
  }

  getTransferencia() {
    return this.http.get<Apiresponse>(`${this.endpoint}/transferencia`, this.headersService.createHeadersGeneric());
  }

  // Activamos o desactivamos el metodo de pago. Al usar Partial<Metodopago> SÓLO se enviará al backend lo que contenga el body
  updateActivado(slug: string, activo: number) {
    let body = {
      'activo': activo
    }
    return this.http.patch<Partial<Metodopago>>(`${this.endpoint}/switchactivo/${slug}`, body, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateMetodopago(slug: string, data: any) {
    return this.http.put<Metodopago>(`${this.endpoint}/metodopago/${slug}`, data, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
