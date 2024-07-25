import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-checkoutpage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatGridListModule, MatCardModule, MatRadioModule, MatButtonModule, RouterLink],
  templateUrl: './checkoutpage.component.html',
  styleUrl: './checkoutpage.component.scss'
})
export class CheckoutpageComponent implements OnInit{

  metodopago:string;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Finalizar compra');
  }

  /* Comprueba si el cupón es válido y lo añade a tu pedido con un observable */
  comprobarcupon(){

  }

  /* Comprueba el método de pago del radio button y procede al pago según el caso */
  pagar(){
    console.log(this.metodopago);
  }
}
