import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.page.html',
  styleUrls: ['./widgets.page.scss'],
})
export class WidgetsPage implements OnInit {

  brandImage="";
  widgets = [
    { label: 'PROCESS', image: './assets/image/planning.png', page: 'Planhome' },
    { label: 'VIEW', image: './assets/image/status.png', page: 'Moulding' },
    { label: 'REPORTS', image: './assets/image/report.png', page: 'Reports' },
    { label: 'APPROVAL', image: './assets/image/approve.png', page: 'approvals' }
  ];
  
  
  constructor(private router: Router, private navCtrl:NavController) {
    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["home"]);   
    }

    this.checkStorage();

   }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
  }


  routePage(page){
    this.router.navigate([page]);
  }

  checkStorage() {
    const storage = parseInt(localStorage.getItem("your-data-key"));
    let date = new Date();
    const currentDate = date.setDate(date.getDate()); // Current date in milliseconds
  
    if (currentDate >= storage) {      
      localStorage.removeItem("your-data-key");
      localStorage.removeItem("userid");
      localStorage.removeItem("password"); 
      this.router.navigate(["home"]);      
    }
  
  }

  logout() {

    console.log('Logout clicked!');
    // Clear user data (example)
    localStorage.clear(); // or clear your auth tokens/session storage

    // Optionally show a toast or alert
    // Then navigate to Home
    this.navCtrl.navigateRoot('/home'); 
  }

}
