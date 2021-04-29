import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/data/service/todo.service';
import { Todo } from 'src/app/data/schema/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe(
      (todos) => {
        this.todos = todos;
      },
      (error) => {
        console.log('Error fetching!', error);
      }
    );
  }
}
