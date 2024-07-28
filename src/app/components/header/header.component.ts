import { Component } from '@angular/core';
import { MatIcon, MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidenavserviceService } from '../../services/sidenavservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatToolbarModule, MatMenuModule, MatBadgeModule, MatIconModule, MatSidenavModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private sidenavService: SidenavserviceService, private router: Router) {
    this.iconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/twitter.svg'));
    this.iconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/instagram.svg')); 
  }

  showFiller = false;

  searchForm = new FormGroup({
    searchFormControl : new FormControl('', Validators.required)
  });

  searchproduct(){
    let search = this.searchForm.value.searchFormControl;
    if(this.searchForm.valid) {
      this.router.navigate(['/busqueda', search]).then( () => {
        window.location.reload(); // Recarga página para mostrar el valor de la variable search cuando buscamos un producto. Ver stackoverflow en favoritos/angular con observable para breadcrumb
      })
    }
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  openSidenav() {
    this.sidenavService.open();
  }
}
