import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-micuenta',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,],
  templateUrl: './micuenta.component.html',
  styleUrl: './micuenta.component.scss'
})
export class MicuentaComponent implements OnInit{

  constructor(private title: Title, private auth: AuthService) {}
 
  ngOnInit(): void {
    this.title.setTitle('Mi cuenta < EasyShop');
    this.obtenerUserData();
  }

  obtenerUserData() {
    this.auth.obtenerUser().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
