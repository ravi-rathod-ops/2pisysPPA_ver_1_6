import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


   constructor(private platform: Platform, private router: Router, private authService: AuthService) {
    console.log("asddsad");
    
    this.authService.initializeApp();
  }

}
