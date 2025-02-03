import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-emailverificado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatButtonModule],
  templateUrl: './emailverificado.component.html',
  styleUrl: './emailverificado.component.scss'
})
export class EmailverificadoComponent {

  baseUrl: string = environment.BaseUrl;

  constructor(private title: Title) {}
 
  ngOnInit(): void {
    this.title.setTitle('Email verificado | EasyShop');
  }
}
