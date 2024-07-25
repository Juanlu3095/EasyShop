import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavserviceService {

  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  // Permite abrir o cerrar el sidenav sin necesidad de conocer el estado del mismo. Es decir, si está abierto, lo cerrará y viceversa
  public toggle(): void {
    this.sidenav.toggle();
  }
}
