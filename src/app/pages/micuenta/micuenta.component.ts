import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-micuenta',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,],
  templateUrl: './micuenta.component.html',
  styleUrl: './micuenta.component.scss'
})
export class MicuentaComponent implements OnInit{

  constructor(private title: Title) {}
 
  ngOnInit(): void {
    this.title.setTitle('Mi cuenta < EasyShop');
  }
}
