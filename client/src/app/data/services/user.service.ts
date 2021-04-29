import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JsonApiService, BASE_URL } from './json-api.service';
import { User } from '../schema/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private jsonApiService: JsonApiService) {}

  getAll(): Observable<Array<User>> {
    return this.jsonApiService
      .getHttpClient()
      .get<Array<User>>(`${BASE_URL}/users`);
  }

  getSingle(id: number): Observable<User> {
    return this.jsonApiService
      .getHttpClient()
      .get<User>(`${BASE_URL}/users/${id}`);
  }

  addUser(user: User): void {}
}
