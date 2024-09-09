import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from '../models/image';
import { environment } from '../../environments/environment.development';
import { Subject, tap } from 'rxjs';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  public endpoint = environment.ApiEndpoint;
  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.

  constructor(private http: HttpClient) { }

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getProducts() { // Solicitud HTTP de prueba
    return this.http.get<any[]>('https://api.escuelajs.co/api/v1/products');
  }

  getImages() {
    return this.http.get<Apiresponse>(`${this.endpoint}/image`);
  }

  getImage(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/image/${id}`);
  }

  postImage(ImageForm: any) {
    return this.http.post<Image>(`${this.endpoint}/image`, ImageForm).pipe(
      tap(() => {
        this.refresh$.next()
      })
    );
  }

  updateImage(id: number, ImageForm: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    var options = {headers: headers}
    return this.http.put<Image>(`${this.endpoint}/image/${id}`, ImageForm, options).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteImage(id: number) {
    return this.http.delete<Image>(`${this.endpoint}/image/${id}`).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
