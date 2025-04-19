import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
export class ApprovalsPage implements OnInit {

  brandImage="";

  constructor(private router: Router) { }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
  }

  routePage(page){
    this.router.navigate([page]);
  }


}
