import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Role } from 'src/app/data/schema/logged-user';
import { AuthService } from 'src/app/data/services/auth.service';

/**
 * The app guard of the application.
 *
 * This guard protects access to sensitive routes.
 * This means that an anonymous client can only access these
 * routes if they login & they have the required roles.
 *
 * The required roles are specified as an `Array<Role>` in the routing module
 * when defining the route itself.
 * @Guard
 */
@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const authorizedRoles = route.data.roles as Array<Role>;
    return this.authService.getCurrentUser().pipe(
      map((user) => {
        // -- https://stackoverflow.com/a/39893636/10543130
        return authorizedRoles.some((role) => user.roles.includes(role));
      }),
      catchError(() => {
        // -- No token error
        // if (this.router.url.includes('admin')) {
        //   this.router.navigate(['/admin/login']);
        //   return of(false);
        // }
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
