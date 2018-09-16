import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../service/app.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  action = 'home';
  productList: Array<Product> = null;

  subscription: any;
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.subscription = this.appService.getProductList().subscribe((data: Array<Product>) => {
      this.productList = data;
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  setAction(action){
    this.action= action;
    this.appService.setNavAction(action);
  }
}
