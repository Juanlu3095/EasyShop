import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavserviceService {

  private sidenav: MatSidenav;

  // Permite seleccionar el sidenav sobre el que se va trabajar
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  // Permite mostrar el sidenav seleccionado
  public open() {
    return this.sidenav.open();
  }

  // Permite ocultar el sidenav seleccionado
  public close() {
    return this.sidenav.close();
  }

  // Permite abrir o cerrar el sidenav sin necesidad de conocer el estado del mismo. Es decir, si está abierto, lo cerrará y viceversa
  public toggle(): void {
    this.sidenav.toggle();
  }
}
