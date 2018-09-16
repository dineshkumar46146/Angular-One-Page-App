import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { of,Observable, Subject, BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppJsonService extends AppService {
    constructor(private http: HttpClient)   {
        super();
    }

    getProductList()  : Observable<Array<Product>>  {
        return this.http.get<Array<Product>>('http://localhost:3000/product');
    }

    addProduct(data : {})  : Observable<Product>  {
        return this.http.post<Product>('http://localhost:3000/product', data);
    }
}
