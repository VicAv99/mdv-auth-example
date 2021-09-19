import { Component } from '@angular/core';
import { FeaturesAuthFacade } from '@cs/core/core-state';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  title = 'dope-items';
  links = [{ path: '', icon: 'home', title: 'Items' }];

  constructor(private authFacade: FeaturesAuthFacade) {}

  logoutAttempt() {
    this.authFacade.logout();
  }
}
