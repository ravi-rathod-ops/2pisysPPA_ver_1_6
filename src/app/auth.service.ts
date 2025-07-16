import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private platform: Platform, private router: Router) { }

  isWithinAutoLoginPeriod(days: number, lastLogin: string | null): boolean {
      if (!lastLogin) return false;
  
      const lastLoginDate = new Date(lastLogin);
      const now = new Date();
      const diffTime = now.getTime() - lastLoginDate.getTime();
      const diffDays = diffTime / (1000 * 3600 * 24);
  
      return diffDays <= days;
    }
  
    initializeApp() {
      this.platform.ready().then(() => {
        const userid = localStorage.getItem('userid');
        const password = localStorage.getItem('password');
        const lastLogin = localStorage.getItem('lastManualLogin');
  
        if (userid && password && this.isWithinAutoLoginPeriod(2, lastLogin)) {
          console.log("if");
          
        } else {
          console.log("else");
          localStorage.removeItem("userid");
      localStorage.removeItem("password");
      localStorage.removeItem("your-data-key");
          this.router.navigate(['home']);
        }
      });
    }
}
