import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Ofertaempleo } from '../models/ofertaempleo';
import { Jobcategory } from '../models/jobcategory';
import { Provincias } from '../models/provincias';
import { Cv } from '../models/cv';
import { Subject, tap, map } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api
type LaravelResponse = { success: boolean, result: Ofertaempleo}

@Injectable({
  providedIn: 'root'
})
export class OfertasempleoService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private httpheaders: HttpheadersService) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  /* OFERTAS DE EMPLEO */
  getAllOfertas() {
    return this.http.get<Ofertaempleo[]>(`${this.endpoint}/jobs`, this.httpheaders.createHeadersGeneric());
  }

  getOferta(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/jobs/${id}`, this.httpheaders.createHeadersGeneric());
  }

  postOferta(crearEmpleoForm: any) {
    return this.http.post<Ofertaempleo>(`${this.endpoint}/jobs`, crearEmpleoForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateOferta(id:number, editarEmpleoForm: any) {
    return this.http.put<Ofertaempleo>(`${this.endpoint}/jobs/${id}`, editarEmpleoForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteOferta(id:number) {
    return this.http.delete<Ofertaempleo>(`${this.endpoint}/jobs/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteOfertas(id: Array<number>) {
    return this.http.delete<Ofertaempleo>(`${this.endpoint}/jobs/selected/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  filtrarOfertas(filtroForm: any) {
    return this.http.post<Ofertaempleo[]>(`${this.endpoint}/jobs/filter`, filtroForm, this.httpheaders.createHeadersGeneric()).pipe(
      map( (respuesta:any) => { // Entre paréntesis para poder indicar el tipo
        return respuesta.result;
      })
    );
  }

  /* PROVINCIAS */
  getAllProvinces() {
    return this.http.get<Provincias[]>(`${this.endpoint}/provinces`, this.httpheaders.createHeadersGeneric());
  }

  /* CATEGORÍAS DE EMPLEO */
  getAllJobcategories() {
    return this.http.get<Jobcategory[]>(`${this.endpoint}/jobcategories`, this.httpheaders.createHeadersGeneric());
  }

  getJobCategory(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/jobcategories/${id}`, this.httpheaders.createHeadersGeneric()).pipe(
      map( (respuesta: Apiresponse) => {
        return respuesta.data;
      })
    );
  }

  postJobcategory(categoryForm: any) {
    return this.http.post<Jobcategory>(`${this.endpoint}/jobcategories`, categoryForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    );
  }

  updateJobcategory(id:number, categoryForm: any) {
    return this.http.put<Jobcategory>(`${this.endpoint}/jobcategories/${id}`, categoryForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteJobcategories(id: number | Array<number>) {
    return this.http.delete<Ofertaempleo>(`${this.endpoint}/jobcategories/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  getCVsPorOferta(idOferta:number) {
    return this.http.get<Cv>(`${this.endpoint}/cvs/empleo/${idOferta}`, this.httpheaders.createHeadersAdmin());
  }

  getCv(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/cvs/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );;
  }

  postCv(jobForm: any) {
    return this.http.post<Cv>(`${this.endpoint}/cvs`, jobForm); // Si ponemos headers, no se podrá enviar ya que ruta_cv contiene un file, por lo que crearEmpleoForm no sería un JSON
  }

  updateCv(id: number, CvForm: any) {
    return this.http.put<Cv>(`${this.endpoint}/cvs/${id}`, CvForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteCv(id: number | Array<number>) {
    return this.http.delete<Cv>(`${this.endpoint}/cvs/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
