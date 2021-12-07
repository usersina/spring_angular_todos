import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/data/services/auth.service';

/**
 * The auth guard of the application.
 *
 * This guard protects access to routes such as `login` or `register`.
 * This means that a logged in user cannot access these routes unless
 * they logout. Basically the oppostive of `AppGuard`.
 * @Guard
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(_route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
      map((user) => {
        if (user) {
          this.router.navigate(['/todos']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        return of(true);
      })
    );
  }
}
