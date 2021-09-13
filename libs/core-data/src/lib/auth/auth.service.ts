import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CS_ENVIRONMENT, CsEnvironment } from '@cs/environment';
import { BehaviorSubject, Observable } from 'rxjs';

export const TOKEN_NAME = 'cs-sample::token';
export const MODEL = 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(
    @Inject(CS_ENVIRONMENT) private config: CsEnvironment,
    private router: Router,
    private http: HttpClient
  ) {
    this.setToken(this.getToken());
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string | null): void {
    localStorage.setItem(TOKEN_NAME, token ?? 'null');
    this.isAuthenticated$.next(token !== null);
  }

  login(loginData: any): Observable<{ access_token: string }> {
    console.log(loginData);
    return this.http.post<{ access_token: string }>(
      `${this.config.baseUrl}/${MODEL}/login`,
      loginData
    );
  }

  logout(): void {
    this.setToken(null);
    this.router.navigate(['/login']);
  }
}
