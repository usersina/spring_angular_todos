import { Component } from '@angular/core';
import { AuthService } from './data/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';

  constructor(private authService: AuthService) {
    this.authService.getCurrentUser().subscribe({
      next: () => console.warn('User loaded from JWT.'),
      error: () => console.warn('No user found!'),
    });
  }
}
