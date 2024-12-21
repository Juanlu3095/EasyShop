import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politicaprivacidad',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './politicaprivacidad.component.html',
  styleUrl: './politicaprivacidad.component.scss'
})
export class PoliticaprivacidadComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Política de privacidad | EasyShop');
  }
}
