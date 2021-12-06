import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthStrategyService } from 'src/app/shared/services/auth-strategy.service';
import { environment } from 'src/environments/environment';
import { AuthResponse, LoginInfo } from '../schema/auth';
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
      .post<AuthResponse>(`${environment.auth_url}/login`, credentials)
      .pipe(
        tap((auth) => this.authStrategyService.doLoginUser(auth.access_token)),
        switchMap(() =>
          this.authStrategyService.getCurrentUser().pipe(map((user) => user))
        )
      );
  }

  getCurrentUser$(): Observable<LoggedUser> {
    return this.authStrategyService.getCurrentUser();
  }
  isLoggedIn$(): Observable<boolean> {
    return this.authStrategyService.getCurrentUser().pipe(
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
