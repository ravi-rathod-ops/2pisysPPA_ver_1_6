import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  brandImage="";

  constructor(private router: Router) { }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
  }

  routePage(page){
    this.router.navigate([page]);
  }



}
