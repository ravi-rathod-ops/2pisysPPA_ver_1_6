import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private deferredPrompt: any;

  constructor(
    private platform: Platform,
    private router: Router,
    private authService: AuthService
  ) {
    console.log('asddsad');

    this.authService.initializeApp();

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
  }

  showInstallPrompt() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted install');
        }
        this.deferredPrompt = null;
      });
    }
  }
  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('password');
    localStorage.removeItem('your-data-key');
    this.router.navigate(['home']);
  }
}
