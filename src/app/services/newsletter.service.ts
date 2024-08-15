import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment.development';

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

}
