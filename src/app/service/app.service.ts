import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
    navSubject: Subject<string> = new BehaviorSubject('home');
    navObservers$ :Observable<string>;
    constructor()   {
        this.navObservers$ = this.navSubject.asObservable();
    }

    getProductList()  : Observable<Array<Product>>  {
        return null;
    }

    addProduct(data : {})  : Observable<Product>  {
        return null;
    }


    setNavAction(action: string) {
        this.navSubject.next(action);
    }

    getNavObs() : Observable<string> {
        return this.navObservers$;
    }
}
