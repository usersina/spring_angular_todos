import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/schema/user';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoadingUsers: boolean = true;

  constructor(private userService: UserService) {}

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
  }
}
