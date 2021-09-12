import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export const TOKEN_NAME = 'cs-sample::token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.setToken(this.getToken() ?? '');
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
    this.isAuthenticated$.next(token !== '');
  }

  logout() {
    this.setToken('');
    this.router.navigate(['/login']);
  }
}
