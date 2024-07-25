import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { SidenavserviceService } from './services/sidenavservice.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'EasyShop';

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private sidenavService: SidenavserviceService) {}

  ngOnInit() {
    // Seleccionamos el sidenav al que se le vamos a aplicar el servicio. sidenav viene del html #sidenav
    this.sidenavService.setSidenav(this.sidenav);
  }

  closeSidenav(){
    this.sidenavService.close();
  }
}
