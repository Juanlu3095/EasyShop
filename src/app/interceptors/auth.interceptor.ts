import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

/*
* Interceptor que añade el token de autorización dependiendo de la cabecera de las peticiones HTTP
*/
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const cookieService = inject(CookieService);
  let clonedRequest = req;

  if(req.headers.has('X-A-T')) { // Intercepta peticiones HTTP con permisos de admin
    let TOKEN_A = cookieService.get('TOKEN_A');

    if(TOKEN_A) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${TOKEN_A}`
        }
      })
    }

    return next(clonedRequest);

  } else if(req.headers.has('X-C-T')) { // Intercepta peticiones HTTP con permisos de cliente
    let TOKEN_C = cookieService.get('TOKEN_C');

    if(TOKEN_C) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${TOKEN_C}`
        }
      })
    }

    return next(clonedRequest);

  } else {
    return next(req);
  }
};
