import { Component } from '@angular/core';
import { AuthService } from '@cs/core-data';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authService.isAuthenticated$.pipe(tap(console.log));
  title = 'dope-items';
  links = [{ path: '', icon: 'home', title: 'Home' }];

  constructor(private authService: AuthService) {}

  logoutAttempt() {
    this.authService.logout();
  }
}
