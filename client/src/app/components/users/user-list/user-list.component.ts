import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/data/schema/logged-user';
import { User } from 'src/app/data/schema/user';
import { AuthService } from 'src/app/data/services/auth.service';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoadingUsers: boolean = true;

  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (users) => {
        this.users = users;
        this.isLoadingUsers = false;
      },
      (error) => {
        // Use service to show alert error maybe
        console.log('Error fetching!', error);
      }
    );

    this.authService.loggedUser$.subscribe((loggedUser) => {
      if (loggedUser?.roles.includes(Role.Admin)) {
        this.isAdmin = true;
      } else this.isAdmin = false;
    });
  }

  deleteUser(id: number): void {
    if (
      confirm(
        'Are you sure? All Todos associated with this user will be deleted!'
      )
    ) {
      this.users = this.users.filter((user) => user.id !== id);
      this.userService.deleteUser(id).subscribe();
    }
  }
}
