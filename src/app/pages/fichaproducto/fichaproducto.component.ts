import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fichaproducto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule, MatIcon, MatButtonModule, MatExpansionModule, RouterLink],
  templateUrl: './fichaproducto.component.html',
  styleUrl: './fichaproducto.component.scss'
})
export class FichaproductoComponent implements OnInit{

  // Esta variable sería la cantidad del producto que viene de la base de datos
  quantity:number

  constructor(private title: Title) {}

  ngOnInit(): void {
    // Habrá que obtener el nombre del producto desde la api directamente
    this.title.setTitle('Ficha de producto');
  }
}
