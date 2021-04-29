import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/data/schema/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // todo cannot be null here, since it comes from an input
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {}

  setClasses(): Object {
    return {
      row: true,
      todo: true,
      'is-complete': this.todo.completed,
    };
  }
}
