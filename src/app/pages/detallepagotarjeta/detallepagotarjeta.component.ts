import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepagotarjeta',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './detallepagotarjeta.component.html',
  styleUrl: './detallepagotarjeta.component.scss'
})
export class DetallepagotarjetaComponent implements OnInit{

  resultado: string;

  constructor(private title: Title, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Resultado del pago | Easyshop')

    this.resultado = this.activeRoute.snapshot.params['resultado']
  }
}
