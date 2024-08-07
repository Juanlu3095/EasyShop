import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Ofertaempleo } from '../models/ofertaempleo';
import { Jobcategory } from '../models/jobcategory';
import { Provincias } from '../models/provincias';

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
    return this.http.get<Apiresponse>(`${this.endpoint}/jobs/${id}`);
  }

  postOferta(crearEmpleoForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Ofertaempleo[]>(`${this.endpoint}/jobs`, crearEmpleoForm, options);
  }

  updateOferta(id:number, editarEmpleoForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<any>(`${this.endpoint}/jobs/${id}`, editarEmpleoForm, options)
  }

  deleteOferta(id:number) {

  }

  getAllProvinces() {
    return this.http.get<Provincias[]>(`${this.endpoint}/provinces`);
  }

  getAllJobcategories() {
    return this.http.get<Jobcategory[]>(`${this.endpoint}/jobcategories`);
  }

  getCVs(idOferta:number) {

  }

  postCv(jobForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post(`${this.endpoint}/cvs`, jobForm, options);
  }
}
