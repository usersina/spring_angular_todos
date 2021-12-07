import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, throwError } from 'rxjs';
import { LoggedUser } from 'src/app/data/schema/logged-user';

/**
 * The strategy used to authenticate the user.
 *
 * The backend returns a `JWT` on login success, from which
 * we can extract the user information such as the role.
 *
 * **NOTE**: A better approach is a mix of _Cookie_ & _JWT_ implementations
 * where token has no attributed data but is validated backend side.
 * @StrategyService
 */
@Injectable({
  providedIn: 'root',
})
export class AuthStrategyService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private helper = new JwtHelperService();

  constructor() {}

  doLoginUser(token: string): Observable<LoggedUser> {
    localStorage.setItem(this.JWT_TOKEN, token);
    return this.getUserFromToken(token);
  }

  doLogoutUser(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  /**
   * This method is used to get the current logged in user from either
   * the cached `loggedUser` property or from `JWT` if no user is found.
   * If also no token is found, throw an error.
   *
   * @AuthStrategyService
   */
  getCurrentUser(): Observable<LoggedUser> {
    let token = this.getToken();
    if (token) {
      if (this.helper.isTokenExpired(token))
        throwError(new Error('Token expired!'));
      // -- No logged user however we have a token, return user from it
      return this.doLoginUser(token);
    }

    // -- We have nothing, return a throwable to method caller
    return throwError(new Error('No token found!'));
  }

  getToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private getUserFromToken(token: string): Observable<LoggedUser> {
    return of<LoggedUser>(this.helper.decodeToken<LoggedUser>(token));
  }
}
