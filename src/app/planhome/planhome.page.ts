import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planhome',
  templateUrl: './planhome.page.html',
  styleUrls: ['./planhome.page.scss'],
})
export class PlanhomePage implements OnInit {

  brandImage="";

  constructor(private router: Router) { }

  ngOnInit() {
    this.brandImage=localStorage.getItem('brandImage');
  }

  routePage(page){
    this.router.navigate([page]);
  }

}
