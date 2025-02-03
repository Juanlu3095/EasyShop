import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image';
import { environment } from '../../environments/environment';
import { Subject, tap } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  public endpoint = environment.ApiEndpoint;
  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.

  constructor(private http: HttpClient, private httpheaders: HttpheadersService) { }

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getImages() {
    return this.http.get<Apiresponse>(`${this.endpoint}/image`, this.httpheaders.createHeadersAdmin());
  }

  getImage(id: number) {
    return this.http.get<Apiresponse>(`${this.endpoint}/image/${id}`, this.httpheaders.createHeadersAdmin());
  }

  postImage(ImageForm: any) {
    return this.http.post<Image>(`${this.endpoint}/image`, ImageForm, this.httpheaders.createHeadersAdminAnyObject()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    );
  }

  updateImage(id: number, ImageForm: any) {
    return this.http.put<Image>(`${this.endpoint}/image/${id}`, ImageForm, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }

  deleteImage(id: number) {
    return this.http.delete<Image>(`${this.endpoint}/image/${id}`, this.httpheaders.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
