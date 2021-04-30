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
      .get<Array<User>>(`${BASE_URL}/users`, {
        headers: this.jsonApiService.getHttpHeaders(),
      });
  }

  getSingle(id: number): Observable<User> {
    return this.jsonApiService
      .getHttpClient()
      .get<User>(`${BASE_URL}/users/${id}`, {
        headers: this.jsonApiService.getHttpHeaders(),
      });
  }

  addUser(user: User): Observable<User> {
    return this.jsonApiService
      .getHttpClient()
      .post<User>(`${BASE_URL}/users`, user, {
        headers: this.jsonApiService.getHttpHeaders(),
      });
  }

  editUser(user: User): Observable<User> {
    return this.jsonApiService
      .getHttpClient()
      .put<User>(`${BASE_URL}/users`, user, {
        headers: this.jsonApiService.getHttpHeaders(),
      });
  }

  deleteUser(id: number): Observable<void> {
    return this.jsonApiService
      .getHttpClient()
      .delete<void>(`${BASE_URL}/users/${id}`, {
        headers: this.jsonApiService.getHttpHeaders(),
      });
  }
}
