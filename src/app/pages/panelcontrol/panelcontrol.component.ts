import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-panelcontrol',
  standalone: true,
  imports: [],
  templateUrl: './panelcontrol.component.html',
  styleUrl: './panelcontrol.component.scss'
})
export class PanelcontrolComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Panel de control < EasyShop')
  }
}
