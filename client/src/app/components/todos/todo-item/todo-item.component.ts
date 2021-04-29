import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/data/schema/todo';
import { TodoService } from 'src/app/data/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // todo cannot be null here, since it comes from an input
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

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

  onDelete(id?: number): void {
    console.log('Deleting todo with id:', id);
  }
}
