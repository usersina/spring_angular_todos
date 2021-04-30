import { Component } from '@angular/core';
import { TodoService } from 'src/app/data/services/todo.service';
import { Todo } from 'src/app/data/schema/todo';
import { User } from 'src/app/data/schema/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  currentUser!: User;
  showTodos: boolean = false;

  todos: Todo[] = [];
  isLoadingTodos: boolean = true;

  constructor(private todoService: TodoService) {}

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.showTodos = true;
    this.todoService.getAll(this.currentUser.id).subscribe(
      (todos) => {
        this.todos = todos;
        this.isLoadingTodos = false;
      },
      (error) => {
        // Use service to show error maybe
        console.log('Error fetching!', error);
      }
    );
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todoService.deleteTodo(id).subscribe();
  }

  addTodo(newTodo: Todo): void {
    this.todoService.addTodo(newTodo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
