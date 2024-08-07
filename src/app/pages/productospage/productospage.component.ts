import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-productospage',
  standalone: true,
  imports: [],
  templateUrl: './productospage.component.html',
  styleUrl: './productospage.component.scss'
})
export class ProductospageComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Productos < EasyShop');
  }
}
