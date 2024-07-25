import { Component } from '@angular/core';
import { MatIcon, MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { SidenavserviceService } from '../../services/sidenavservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatToolbarModule, MatMenuModule, MatBadgeModule, MatIconModule, MatSidenavModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private sidenavService: SidenavserviceService) {
    this.iconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/twitter.svg'));
    this.iconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/instagram.svg')); 
  }

  showFiller = false;

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  openSidenav() {
    this.sidenavService.open();
  }
}
