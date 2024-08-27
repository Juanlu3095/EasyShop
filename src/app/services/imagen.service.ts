import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any[]>('https://api.escuelajs.co/api/v1/products');
  }
}
