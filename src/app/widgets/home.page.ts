import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-widgets',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  brandImage="";
  widgets = [
    { label: 'PROCESS', image: './assets/image/planning.png', page: 'Planhome' },
    { label: 'VIEW', image: './assets/image/status.png', page: 'Moulding' },
    { label: 'REPORTS', image: './assets/image/report.png', page: 'Reports' },
    { label: 'APPROVAL', image: './assets/image/approve.png', page: 'approvals' }
  ];
  isDataPresent:boolean = false;
  
  
  constructor(private router: Router, private navCtrl:NavController) {
    if(localStorage.getItem('userid') == null && localStorage.getItem('password') == null)
    {
      this.router.navigate(["login"]);   
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
      this.router.navigate(["login"]);      
    }
  
  }

  logout() {

    localStorage.removeItem("userid");
    localStorage.removeItem("password");
    localStorage.removeItem("your-data-key");
    this.router.navigate(["login"]);
  }

}
