import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  baseUrl: string = environment.BaseUrl;
}
