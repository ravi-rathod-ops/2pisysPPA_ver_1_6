import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CryptoService } from './services/crypto.service';
import { ConfigLoaderService } from './services/config-loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  dataUrls: any = [];
  constructor(
    private platform: Platform,
    private router: Router,
    private cryptoService: CryptoService,
    private route: ActivatedRoute,
    private configService: ConfigLoaderService,
    @Inject('APP_CONFIG') private config: any
  ) {
    this.dataUrls = this.config.COMPANY_URL;
  }

  isWithinAutoLoginPeriod(days: number, lastLogin: string | null): boolean {
    if (!lastLogin) return false;
    const lastLoginDate = new Date(lastLogin);
    const now = new Date();
    const diffTime = now.getTime() - lastLoginDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays <= days;
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const encUserId = queryParams.get('user_id');
      const encPassword = queryParams.get('password');
      const encClientId = queryParams.get('clientid');
      const enauthid = queryParams.get('authid');

      const currentPath = window.location.pathname + window.location.search;
      if (encUserId && encPassword && encClientId && enauthid) {
        try {
          const userid = await this.cryptoService.decrypt(
            decodeURIComponent(encUserId)
          );
          const password = await this.cryptoService.decrypt(
            decodeURIComponent(encPassword)
          );
          const clientid = await this.cryptoService.decrypt(
            decodeURIComponent(encClientId)
          );
          const authid = await this.cryptoService.decrypt(
            decodeURIComponent(enauthid)
          );

          localStorage.setItem('userid', userid);
          localStorage.setItem('password', password);
          localStorage.setItem('clientid', clientid);
          localStorage.setItem('authid', authid);
          localStorage.setItem('lastManualLogin', new Date().toISOString());

          let fullUrl: any | undefined;
          for (let obj of this.dataUrls) {
            if (obj.hasOwnProperty(localStorage.getItem('clientid'))) {
              fullUrl = 'https://' + obj[localStorage.getItem('clientid')];
              break;
            }
          }
          localStorage.setItem('url', fullUrl);
          this.router.navigateByUrl(currentPath);
          return;
        } catch (error) {
          console.error(' Decryption failed:', error);
          this.router.navigate(['home']);
          return;
        }
      }

      const userid = localStorage.getItem('userid');
      const password = localStorage.getItem('password');
      const lastLogin = localStorage.getItem('lastManualLogin');

      if (userid && password && this.isWithinAutoLoginPeriod(2, lastLogin)) {
        const returnUrl = localStorage.getItem('returnUrl') || '/home';
        console.log('Auto-login via localStorage to:', returnUrl);
        this.router.navigateByUrl(returnUrl);
      } else {
        console.log('No valid login, redirecting to home');
        localStorage.clear();
        this.router.navigate(['home']);
      }
    });
  }
}
