import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Nosotros | EasyShop');
  }
}
