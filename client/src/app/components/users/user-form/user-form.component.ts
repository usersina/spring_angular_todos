import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/schema/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  isNewForm: boolean = true;
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    createdAt: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Either add or edit user
    console.log(this.user);
  }
}
