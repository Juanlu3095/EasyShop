import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politicacookies',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './politicacookies.component.html',
  styleUrl: './politicacookies.component.scss'
})
export class PoliticacookiesComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Política de cookies | EasyShop');
  }
}
