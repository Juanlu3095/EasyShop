import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-error404page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIcon, MatButtonModule],
  templateUrl: './error404page.component.html',
  styleUrl: './error404page.component.scss'
})
export class Error404pageComponent implements OnInit{
  baseUrl: string = environment.BaseUrl;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Página no encontrada | EasyShop');
  }
}
