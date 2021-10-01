import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private titlePage:Title){
  }
  ngOnInit(){}
  pageTitle(title:string){
    this.titlePage.setTitle(title)
  }


}
