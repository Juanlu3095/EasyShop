import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-avisolegal',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './avisolegal.component.html',
  styleUrl: './avisolegal.component.scss'
})
export class AvisolegalComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Aviso legal | EasyShop');
  }
}
