import { Component, OnInit } from '@angular/core';
//import { PRODUCT_LIST } from '../../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  fullImagePath;
  action2 = 'product';
  products = null;//PRODUCT_LIST;
  constructor() {
    this.fullImagePath = '../img/img1.jpg';
  }
  setAction(action){
    this.action2 = action;
  }

  ngOnInit() {
  }

}
