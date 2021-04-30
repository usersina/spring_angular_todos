import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/data/schema/todo';
import { User } from 'src/app/data/schema/user';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  // Assert non null, since it comes after loading
  @Input() selectedUser!: User;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  todo: Todo = {
    title: '',
    completed: false,
    userId: -1, // Initially, userId is not fetched
  };

  constructor() {}

  ngOnInit(): void {
    this.todo.userId = this.selectedUser.id!;
  }

  onSubmit(): void {
    this.todo.userId = this.selectedUser.id!;
    this.addTodo.emit(this.todo);
  }
}
