import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-dashboardnewsletter',
  standalone: true,
  imports: [],
  templateUrl: './dashboardnewsletter.component.html',
  styleUrl: './dashboardnewsletter.component.scss'
})
export class DashboardnewsletterComponent implements OnInit{

  constructor(private title: Title, private newsletterService: NewsletterService) {}

  ngOnInit(): void {
    this.title.setTitle('Newsletter < EasyShop');

    this.newsletterService.getNewsletters().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
