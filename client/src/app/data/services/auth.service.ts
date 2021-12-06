import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthStrategyService } from 'src/app/shared/services/auth-strategy.service';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../schema/auth';
import { LoggedUser } from '../schema/logged-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private authStrategyService: AuthStrategyService
  ) {}

  login(credentials: LoginInfo): Observable<LoggedUser> {
    return this.httpClient
      .post<void>(`${environment.auth_url}/login`, credentials, {
        observe: 'response',
      })
      .pipe(
        tap((resp) =>
          this.authStrategyService.doLoginUser(
            resp.headers.get('Authorization')!
          )
        ),
        switchMap(() =>
          this.authStrategyService.getCurrentUser().pipe(map((user) => user))
        )
      );
  }

  logout(): void {
    this.authStrategyService.doLogoutUser();
  }

  getCurrentUser(): Observable<LoggedUser> {
    return this.authStrategyService.getCurrentUser();
  }

  isLoggedIn(): Observable<boolean> {
    return this.authStrategyService.getCurrentUser().pipe(
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
