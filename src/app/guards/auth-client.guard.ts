import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const AuthaclientGuard: CanActivateFn = () => {

  const cookie = inject(CookieService);
  const router = inject(Router);
  const user = cookie.get('TOKEN_C');

  if(user) {
    return true;

  } else {
    router.navigate(['/acceso']);
    return false;
  }

}

// Función inversa para que cuando el usuario ya esté logueado y vaya al formulario de login, se le lleve al panel de cliente
export const AuthclientGuardReverse: CanActivateFn = () => {

  const cookie = inject(CookieService);
  const router = inject(Router);
  const user = cookie.get('TOKEN_C');

  if(user) {
    router.navigate(['/mi-cuenta']);
    return false;

  } else {
    return true;
  }
}




