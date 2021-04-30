import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/data/schema/user';
import { UserService } from 'src/app/data/services/user.service';

const initialState = {
  isError: false,
  isFormLoading: true,
  isNewForm: true,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    createdAt: new Date(),
  },
};

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  isError: boolean = initialState.isError;
  isFormLoading: boolean = initialState.isFormLoading;
  isNewForm: boolean = initialState.isNewForm;
  user: User = initialState.user;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.activatedRoute.params.subscribe((val) => {
      this.resetState();
      if (val.id === 'new') {
        this.isFormLoading = false;
        return;
      }
      this.userService.getSingle(val.id).subscribe({
        next: (user) => {
          this.isNewForm = false;
          this.user = user;
          this.isFormLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isError = true;
          this.isFormLoading = false;
        },
      });
    });
  }

  resetState(): void {
    this.isError = initialState.isError;
    this.isFormLoading = initialState.isFormLoading;
    this.isNewForm = initialState.isNewForm;
    this.user = initialState.user;
  }

  onSubmit(myForm: NgForm): void {
    console.log(this.user);
    if (this.isNewForm) {
      // Add user
      this.userService.addUser(this.user).subscribe({
        next: () => {
          myForm.reset();
          this.router.navigate(['users']);
        },
        error: (error) => {
          console.log(error);
          console.log('Error adding user!');
        },
      });
    } else {
      // Edit user
      this.userService.editUser(this.user).subscribe({
        next: () => {
          myForm.reset();
          this.router.navigate(['users']);
        },
        error: (error) => {
          console.log(error);
          console.log('Error adding user!');
        },
      });
    }
  }
}
