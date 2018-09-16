import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Product } from '../../product.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // action = 'home';
  productList: Array<Product> = null;
  subscription: any;
  name: string;
  code: string;
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
  addProduct() {
    console.log(this.name , this.code);
    this.appService.addProduct({'code' : this.code, name : this.name}).subscribe(data =>
      {
        console.log('Created product ', data);
      })
  }
}
