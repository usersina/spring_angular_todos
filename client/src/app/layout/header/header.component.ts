import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser, Role } from 'src/app/data/schema/logged-user';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedUser?: LoggedUser;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loggedUser$.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
      if (loggedUser?.roles.includes(Role.Admin)) {
        this.isAdmin = true;
      } else this.isAdmin = false;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
