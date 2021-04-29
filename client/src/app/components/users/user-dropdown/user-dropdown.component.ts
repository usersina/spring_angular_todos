import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/data/schema/user';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css'],
})
export class UserDropdownComponent implements OnInit {
  @Output() setCurrentUser: EventEmitter<User> = new EventEmitter();

  defaultOptionText: string = 'Loading users...';
  users: User[] = [];
  isLoadingUsers: boolean = true;
  currentUser?: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (users) => {
        this.defaultOptionText = 'Choose a specific user to see their todos!';
        this.users = users;
      },
      (error) => {
        this.defaultOptionText = 'Error fetching users, check logs!';
        console.log(error);
      }
    );
  }

  onUserChange(user: User) {
    this.setCurrentUser.emit(user);
  }
}
