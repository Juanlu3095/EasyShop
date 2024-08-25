import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Ofertaempleo } from '../models/ofertaempleo';
import { Jobcategory } from '../models/jobcategory';
import { Provincias } from '../models/provincias';
import { Cv } from '../models/cv';
import { Subject, tap, map } from 'rxjs';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class OfertasempleoService {

  private _refresh$ = new Subject<void>(); // Observable
  constructor(private http: HttpClient) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

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
    return this.http.post<Ofertaempleo>(`${this.endpoint}/jobs`, crearEmpleoForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateOferta(id:number, editarEmpleoForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Ofertaempleo>(`${this.endpoint}/jobs/${id}`, editarEmpleoForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteOferta(id:number) {
    return this.http.delete<Ofertaempleo>(`${this.endpoint}/jobs/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteOfertas(id: Array<number>) {
    return this.http.delete<Ofertaempleo>(`${this.endpoint}/jobs/selected/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  getAllProvinces() {
    return this.http.get<Provincias[]>(`${this.endpoint}/provinces`);
  }

  getAllJobcategories() {
    return this.http.get<Jobcategory[]>(`${this.endpoint}/jobcategories`);
  }

  getJobCategory(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/jobcategories/${id}`).pipe(
      map( (respuesta: Apiresponse) => {
        return respuesta.data;
      })
    );
  }

  postJobcategory(categoryForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Jobcategory>(`${this.endpoint}/jobcategories`, categoryForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    );
  }

  updateJobcategory(id:number, categoryForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Jobcategory>(`${this.endpoint}/jobcategories/${id}`, categoryForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteJobcategories(id: number | Array<number>) {
    return this.http.delete<Ofertaempleo>(`${this.endpoint}/jobcategories/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  getCVsPorOferta(idOferta:number) {
    return this.http.get<Cv>(`${this.endpoint}/cvs/empleo/${idOferta}`);
  }

  getCv(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/cvs/${id}`).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );;
  }

  postCv(jobForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Cv>(`${this.endpoint}/cvs`, jobForm);
  }

  updateCv(id: number, CvForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Cv>(`${this.endpoint}/cvs/${id}`, CvForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteCv(id: number | Array<number>) {
    return this.http.delete<Cv>(`${this.endpoint}/cvs/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
