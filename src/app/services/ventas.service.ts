import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpheadersService } from './httpheaders.service';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  public endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  getVentasBeneficios() {
    return this.http.get<Apiresponse>(`${this.endpoint}/ventasporbeneficio`, this.headersService.createHeadersAdmin()).pipe(
      map(respuesta => {
        return respuesta.data
      })
    );
  }

  getVentasCantidad() {
    return this.http.get<Apiresponse>(`${this.endpoint}/ventasporcantidad`, this.headersService.createHeadersAdmin()).pipe(
      map(respuesta => {
        return respuesta.data
      })
    )
  }
}
