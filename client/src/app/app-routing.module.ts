import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
