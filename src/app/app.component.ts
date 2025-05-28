import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


   constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
  }
 initializeApp() {
    this.platform.ready().then(() => {
      const userid = localStorage.getItem('userid');
      const password = localStorage.getItem('password');
      const lastLogin = localStorage.getItem('lastManualLogin');

      if (userid && password && this.isWithinAutoLoginPeriod(2, lastLogin)) {
        this.router.navigate(['Widgets']);
      } else {
        this.router.navigate(['home']);
      }
    });
  }

  isWithinAutoLoginPeriod(days: number, lastLogin: string | null): boolean {
    if (!lastLogin) return false;

    const lastLoginDate = new Date(lastLogin);
    const now = new Date();
    const diffTime = now.getTime() - lastLoginDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    return diffDays <= days;
  }
}
