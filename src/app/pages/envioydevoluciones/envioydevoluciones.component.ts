import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-envioydevoluciones',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './envioydevoluciones.component.html',
  styleUrl: './envioydevoluciones.component.scss'
})
export class EnvioydevolucionesComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Envío y devoluciones | EasyShop');
  }
}
