import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  action2 = 'about';
  setAction(action){
   
    this.action2 = action;
  }
  constructor() { }

  ngOnInit() {
  }

}
