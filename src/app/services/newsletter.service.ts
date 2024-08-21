import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})

export class NewsletterService {

  private _refresh$ = new Subject<void>(); // Observable
  public endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getNewsletters() {
    return this.http.get<Newsletter[]>(`${this.endpoint}/newsletters`);
  }

  getNewsletter(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/newsletters/${id}`).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );
  }

  postNewsletter(NewsletterForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.post<Newsletter>(`${this.endpoint}/newsletters`, NewsletterForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateNewsletter(idNewsletter: number, NewsletterForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Newsletter>(`${this.endpoint}/newsletters/${idNewsletter}`, NewsletterForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteNewsletter(idNewsletter: number | Array<number>) {
    return this.http.delete<Newsletter>(`${this.endpoint}/newsletters/${idNewsletter}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  exportNewsletters() {
    return this.http.get(`${this.endpoint}/exportarnews`, {
      responseType: 'blob'
    });
  }

}
