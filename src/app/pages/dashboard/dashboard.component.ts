import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResponsivedesignService } from '../../services/responsivedesign.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatMenuModule, MatIcon, MatExpansionModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  dispositivo: string; // Para indicar en el HTML el dispositivo usado.
  open: boolean; // Para abrir o no el sidenav.
  mode: MatDrawerMode; // Para señalar cómo mostrar el sidenav, si como side, over o push.
  sidenavWidth: number; // Para dar un ancho al sidenav.

  constructor(
    private responsiveService: ResponsivedesignService,
    private cookieService: CookieService,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogService) {}

  ngOnInit(): void {
    this.disenoResponsivo();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Ocurre cuando salimos del dashboard, y no cambiando de un subelemento del menú del dashboard.
  }

  // Obtenemos el tipo de dispositivo y aplicamos los valores a la tabla de Angular Material según el caso.
  // Necesitamos desuscribirnos al observable. No es una petición HTTP.
  disenoResponsivo() {
    this.subscription = this.responsiveService.obtenerDispositivo().subscribe({
      next: (dispositivo) => {
        switch(dispositivo) {
          case 'Portátil':
          case 'Desktop':
            this.dispositivo = dispositivo;
            this.open = true;
            this.mode = 'side';
            this.sidenavWidth = 15;
            break;
          case 'Tablet':
            this.dispositivo = dispositivo;
            this.open = false;
            this.mode = 'over';
            this.sidenavWidth = 50;
            break;
          case 'Móvil':
            this.dispositivo = dispositivo;
            this.open = false;
            this.mode = 'over';
            this.sidenavWidth = 80;
            break;
          default:
            console.log('Dispositivo desconocido.');
            break;
        }
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  logout() {
    this.dialogService.openSpinner();
    // Función para eliminar el token de la base de datos y del navegador
    this.authService.logoutAdmin().subscribe({
      next: (respuesta) => {
        this.cookieService.delete('TOKEN_A', '/'); // Para borrar la cookie, debe ir después de la petición de logout a laravel
        this.dialogService.closeAll();
        this.router.navigate(['/iniciosesion']);
      },
      error: (error) => {
        this.dialogService.closeAll();
      }
    })
    
  }
}
