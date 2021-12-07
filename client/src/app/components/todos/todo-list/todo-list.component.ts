import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/data/services/todo.service';
import { Todo } from 'src/app/data/schema/todo';
import { User } from 'src/app/data/schema/user';
import { AuthService } from 'src/app/data/services/auth.service';
import { Role } from 'src/app/data/schema/logged-user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  currentUser!: User;
  showTodos: boolean = false;

  todos: Todo[] = [];
  isLoadingTodos: boolean = false;
  errorMessage?: string;

  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.authService.loggedUser$.subscribe((loggedUser) => {
      if (loggedUser?.roles.includes(Role.Admin)) {
        this.isAdmin = true;
      } else this.isAdmin = false;
    });
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.showTodos = true;
    this.isLoadingTodos = true;
    this.todoService.getAll(this.currentUser.id).subscribe(
      (todos) => {
        this.todos = todos;
        this.isLoadingTodos = false;
      },
      (error) => {
        console.log('Error fetching!', error);
        this.isLoadingTodos = false;
        this.errorMessage =
          error?.error?.message || 'Whoops! An unexpected error has occured!';
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
