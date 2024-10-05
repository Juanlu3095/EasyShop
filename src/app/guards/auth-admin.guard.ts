import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const AuthadminGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Se debe convertir el observable en un boolean con map para que el guard funcione antes de que cargue la página protegida
  return authService.comprobarAdmin().pipe(
    map((respuesta) => {
      if(respuesta.status === true) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    }),
    catchError((error) => { // Se denegará el acceso en caso de error
      router.navigate(['']);
      console.error(error);
      return of(false); // `of(false)` emite false para que el guard deniegue el acceso
    })
  )

}

// Función inversa para que cuando el usuario ya esté logueado y vaya al formulario de login, se le lleve al dashboard
export const AuthadminGuardReverse: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Se debe convertir el observable en un boolean con map para que el guard funcione antes de que cargue la página protegida
  return authService.comprobarAdmin().pipe(
    map((respuesta) => {
      if(respuesta.status === true) {
        router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
    }),
    catchError((error) => { // Se denegará el acceso en caso de error

      if(error.status === 401) {
        return of(true);
      }
      router.navigate(['']);
      return of(false); // `of(false)` emite false para que el guard deniegue el acceso
    })
  )

}




