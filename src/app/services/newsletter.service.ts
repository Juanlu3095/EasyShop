import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpheadersService } from './httpheaders.service';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})

export class NewsletterService {

  private _refresh$ = new Subject<void>(); // Observable
  public endpoint = environment.ApiEndpoint;

  constructor(private http: HttpClient, private httpheaders: HttpheadersService) { }
  
  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getNewsletters() {
    return this.http.get<Newsletter[]>(`${this.endpoint}/newsletters`, this.httpheaders.createHeadersAdmin());
  }

  getNewsletter(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/newsletters/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      map( respuesta => {
        return respuesta.data;
      })
    );
  }

  postNewsletter(NewsletterForm: any) {
    return this.http.post<Newsletter>(`${this.endpoint}/newsletters`, NewsletterForm, this.httpheaders.createHeadersGeneric()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  updateNewsletter(idNewsletter: number, NewsletterForm: any) {
    return this.http.put<Newsletter>(`${this.endpoint}/newsletters/${idNewsletter}`, NewsletterForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteNewsletter(idNewsletter: number | Array<number>) {
    return this.http.delete<Newsletter>(`${this.endpoint}/newsletters/${idNewsletter}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  exportNewsletters() {
    return this.http.get(`${this.endpoint}/exportarnews`, {
      responseType: 'blob',
      headers: new HttpHeaders({
        'X-A-T': 'getProtectedData' // Lo ponemos aqui directamente, ya que el servicio devuelve la palabra 'headers' duplicada
      })
    });
  }

}
