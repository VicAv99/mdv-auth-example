import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthFacade } from '@cs/core-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {
  constructor(public router: Router, private authFacade: AuthFacade) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authFacade.isUserAuthenticated$.pipe(
      map((userAuthenticated) => {
        if (!userAuthenticated) return true;
        this.router.navigateByUrl('/');
        return false;
      })
    );
  }
}
