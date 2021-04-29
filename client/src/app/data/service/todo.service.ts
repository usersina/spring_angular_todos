import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JsonApiService, BASE_URL } from './json-api.service';
import { Todo } from '../schema/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private jsonApiService: JsonApiService) {}

  getAll(): Observable<Array<Todo>> {
    return this.jsonApiService.getHttpClient().get<Todo[]>(`${BASE_URL}/todos`);
  }

  getSingle(id: number): Observable<Todo> {
    return this.jsonApiService
      .getHttpClient()
      .get<Todo>(`${BASE_URL}/todos/${id}`);
  }
}
