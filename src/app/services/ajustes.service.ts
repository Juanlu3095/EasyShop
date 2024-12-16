import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject, tap, map } from 'rxjs';
import { HttpheadersService } from './httpheaders.service';

type Apiresponse = { data: any }; // Ésta es la respuesta que recibimos de la api

@Injectable({
  providedIn: 'root'
})
export class AjustesService {

  private _refresh$ = new Subject<void>(); // Observable, no tiene valor explícito, sólo para avisar al componente de los cambios.
  constructor(private http: HttpClient, private headersService: HttpheadersService) { }

  public endpoint = environment.ApiEndpoint;

  // Obtenemos el Observable
  get refresh$() {
    return this._refresh$;
  }

  getAjustes() {
    return this.http.get<Apiresponse>(`${this.endpoint}/ajustes`, this.headersService.createHeadersAdmin());
  }

  getAjuste(ajuste: string) {
    return this.http.post<Apiresponse>(`${this.endpoint}/ajuste`, {ajuste: ajuste}, this.headersService.createHeadersAdmin()).pipe(
      map( (respuesta) => {
        return respuesta.data
      })
    );
  }

  updateAjuste(idAjuste: number, ajusteForm: any) {
    return this.http.put<Apiresponse>(`${this.endpoint}/ajustes/${idAjuste}`, ajusteForm, this.headersService.createHeadersAdmin()).pipe(
      tap(() => {
        this.refresh$.next()
      })
    )
  }
}
