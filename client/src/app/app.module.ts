import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserItemComponent } from './components/users/user-item/user-item.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';

import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { UserDropdownComponent } from './components/users/user-dropdown/user-dropdown.component';

// TODO: ng generate module todos/users to use separate modules (for faster page loading)
// For extra details: https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/app

// NOTE: For shared components, either import the Component directly & use its selector
// Or import export the desired Component in shared.module then import shared.module itself
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoItemComponent,
    TodoListComponent,
    UserListComponent,
    UserItemComponent,
    AddTodoComponent,
    SpinnerComponent,
    UserDropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
