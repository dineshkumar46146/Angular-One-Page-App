import { Component, OnInit } from '@angular/core';
//import { PRODUCT_LIST } from '../product.model';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  productList = null;//PRODUCT_LIST;
  constructor() { }

  ngOnInit() {
  }

}
