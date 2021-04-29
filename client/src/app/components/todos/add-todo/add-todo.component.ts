import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/data/schema/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: Todo = {
    title: '',
    completed: false,
    userId: 1, // Specify the current userId
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.todo);
  }
}
