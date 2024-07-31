import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Ofertaempleo } from '../models/ofertaempleo';

type Apiresponse = { data:Ofertaempleo }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class OfertasempleoService {

  constructor(private http: HttpClient) { }

  public endpoint = environment.ApiEndpoint;

  getAllOfertas() {
    return this.http.get<Ofertaempleo[]>(`${this.endpoint}/jobs`);
  }

  getOferta(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/jobs/${id}`)
  }
}
