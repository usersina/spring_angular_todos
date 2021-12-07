import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthStrategyService } from 'src/app/shared/services/auth-strategy.service';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../schema/auth';
import { LoggedUser, Role } from '../schema/logged-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUserStateSource = new BehaviorSubject<LoggedUser | undefined>(
    undefined
  );
  loggedUser$ = this.loggedUserStateSource.asObservable();

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
          this.authStrategyService.getCurrentUser().pipe(
            map((user) => {
              this.loggedUserStateSource.next(user);
              return user;
            })
          )
        )
      );
  }

  logout(): void {
    this.authStrategyService.doLogoutUser();
    this.loggedUserStateSource.next(undefined);
  }

  getCurrentUser(): Observable<LoggedUser> {
    return this.authStrategyService
      .getCurrentUser()
      .pipe(tap((resp) => this.loggedUserStateSource.next(resp)));
  }

  getToken(): string | null {
    return this.authStrategyService.getToken();
  }
}
