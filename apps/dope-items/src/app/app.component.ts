import { Component } from '@angular/core';
import { AuthService } from '@cs/core-data';
import { AuthFacade } from '@cs/core-state';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  title = 'dope-items';
  links = [{ path: '', icon: 'home', title: 'Items' }];

  constructor(private authFacade: AuthFacade) {}

  logoutAttempt() {
    this.authFacade.logout();
  }
}
