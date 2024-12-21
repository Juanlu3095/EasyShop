import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatExpansionModule],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.scss'
})
export class AyudaComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Centro de ayuda | EasyShop');
  }
}
