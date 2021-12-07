import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggedUser, Role } from 'src/app/data/schema/logged-user';
import { Todo } from 'src/app/data/schema/todo';
import { AuthService } from 'src/app/data/services/auth.service';
import { TodoService } from 'src/app/data/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // todo cannot be null here, since it comes from an input
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  isAdmin: boolean = false;

  constructor(
    private todoService: TodoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loggedUser$.subscribe((loggedUser) => {
      if (loggedUser?.roles.includes(Role.Admin)) {
        this.isAdmin = true;
      } else this.isAdmin = false;
    });
  }

  setClasses(): Object {
    return {
      row: true,
      todo: true,
      'is-complete': this.todo.completed,
    };
  }

  onToggle(todo: Todo): void {
    // Toggel in UI
    todo.completed = !todo.completed;
    // Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe();
  }

  onDelete(id: number): void {
    this.deleteTodo.emit(id);
  }
}
