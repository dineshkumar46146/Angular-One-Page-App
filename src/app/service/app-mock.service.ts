import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { of,Observable, Subject, BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AppMockService extends AppService {

    constructor()   {
        super();
    }

    getProductList()  : Observable<Array<Product>>  {
        return of(PRODUCT_LIST);
    }
}


const PRODUCT_LIST = [
    new Product({ imgUrl:'img/img1.jpg', code: 'PROD1', name: 'Product 1', description:'Product Description   1'}),
    new Product({ imgUrl:'img/img2.jpg', code: 'PROD2', name: 'Product 2', description:'Product Description   2'}),
    new Product({ imgUrl:'img/img3.jpg', code: 'PROD3', name: 'Product 3', description:'Product Description   3'}),
    new Product({ imgUrl:'img/img4.jpg', code: 'PROD4', name: 'Product 4', description:'Product Description   4'}),
    new Product({ imgUrl:'img/img5.jpg', code: 'PROD5', name: 'Product 5', description:'Product Description   5'}),
    new Product({ imgUrl:'img/img6.jpg', code: 'PROD6', name: 'Product 6', description:'Product Description   6'}),
    new Product({ imgUrl:'img/img7.jpg', code: 'PROD7', name: 'Product 7', description:'Product Description   7'}),
    new Product({ imgUrl:'img/img8.jpg', code: 'PROD8', name: 'Product 8', description:'Product Description   8'}),
    new Product({ imgUrl:'img/img9.jpg', code: 'PROD9', name: 'Product 9', description:'Product Description   9'}),
    new Product({ imgUrl:'img/img10.jpg', code: 'PROD10', name: 'Product 10', description:'Product Description   10'})
   /* new Product({ imgUrl:'img/img11.jpg', code: 'PROD11', name: 'Product 11', description:'Product Description   11'}),
    new Product({ imgUrl:'img/img12.jpg', code: 'PROD12', name: 'Product 12', description:'Product Description   12'}),
    new Product({ imgUrl:'img/img13.jpg', code: 'PROD13', name: 'Product 13', description:'Product Description   13'}),
    new Product({ imgUrl:'img/img14.jpg', code: 'PROD14', name: 'Product 14', description:'Product Description   14'}),
    new Product({ imgUrl:'img/img15.jpg', code: 'PROD15', name: 'Product 15', description:'Product Description   15'}),
    new Product({ imgUrl:'img/img16.jpg', code: 'PROD16', name: 'Product 16', description:'Product Description   16'}),
    new Product({ imgUrl:'img/img17.jpg', code: 'PROD17', name: 'Product 17', description:'Product Description   17'}),
    new Product({ imgUrl:'img/img18.jpg', code: 'PROD18', name: 'Product 18', description:'Product Description   18'}),
    new Product({ imgUrl:'img/img19.jpg', code: 'PROD19', name: 'Product 19', description:'Product Description   19'}),
    new Product({ imgUrl:'img/img20.jpg', code: 'PROD20', name: 'Product 20', description:'Product Description   20'}),
    new Product({ imgUrl:'img/img21.jpg', code: 'PROD21', name: 'Product 21', description:'Product Description   21'}),
    new Product({ imgUrl:'img/img22.jpg', code: 'PROD22', name: 'Product 22', description:'Product Description   22'}),
    new Product({ imgUrl:'img/img23.jpg', code: 'PROD23', name: 'Product 23', description:'Product Description   23'}),
    new Product({ imgUrl:'img/img24.jpg', code: 'PROD24', name: 'Product 24', description:'Product Description   24'}),
    new Product({ imgUrl:'img/img25.jpg', code: 'PROD25', name: 'Product 25', description:'Product Description   25'}),
    new Product({ imgUrl:'img/img26.jpg', code: 'PROD26', name: 'Product 26', description:'Product Description   26'}),
    new Product({ imgUrl:'img/img27.jpg', code: 'PROD27', name: 'Product 27', description:'Product Description   27'}),
    new Product({ imgUrl:'img/img28.jpg', code: 'PROD28', name: 'Product 28', description:'Product Description   28'}),
    new Product({ imgUrl:'img/img29.jpg', code: 'PROD29', name: 'Product 29', description:'Product Description   29'}),
    new Product({ imgUrl:'img/img30.jpg', code: 'PROD30', name: 'Product 30', description:'Product Description   30'}),
    new Product({ imgUrl:'img/img31.jpg', code: 'PROD31', name: 'Product 31', description:'Product Description   31'}),
    new Product({ imgUrl:'img/img32.jpg', code: 'PROD32', name: 'Product 32', description:'Product Description   32'}),
    new Product({ imgUrl:'img/img33.jpg', code: 'PROD33', name: 'Product 33', description:'Product Description   33'}),
    new Product({ imgUrl:'img/img1.jpg', code: 'PROD34', name: 'Product 34', description:'Product Description   34'}),
    new Product({ imgUrl:'img/img2.jpg', code: 'PROD35', name: 'Product 35', description:'Product Description   35'}),
    new Product({ imgUrl:'img/img3.jpg', code: 'PROD36', name: 'Product 36', description:'Product Description   36'}),
    new Product({ imgUrl:'img/img4.jpg', code: 'PROD37', name: 'Product 37', description:'Product Description   37'}),
    new Product({ imgUrl:'img/img5.jpg', code: 'PROD38', name: 'Product 38', description:'Product Description   38'}),
    new Product({ imgUrl:'img/img6.jpg', code: 'PROD39', name: 'Product 39', description:'Product Description   39'}),
    new Product({ imgUrl:'img/img7.jpg', code: 'PROD40', name: 'Product 40', description:'Product Description   40'}),
    new Product({ imgUrl:'img/img8.jpg', code: 'PROD41', name: 'Product 41', description:'Product Description   41'}),
    new Product({ imgUrl:'img/img9.jpg', code: 'PROD42', name: 'Product 42', description:'Product Description   42'}),
    new Product({ imgUrl:'img/img10.jpg', code: 'PROD43', name: 'Product 43', description:'Product Description   43'}),
    new Product({ imgUrl:'img/img11.jpg', code: 'PROD44', name: 'Product 44', description:'Product Description   44'}),
    new Product({ imgUrl:'img/img12.jpg', code: 'PROD45', name: 'Product 45', description:'Product Description   45'}),
    new Product({ imgUrl:'img/img13.jpg', code: 'PROD46', name: 'Product 46', description:'Product Description   46'}),
    new Product({ imgUrl:'img/img14.jpg', code: 'PROD47', name: 'Product 47', description:'Product Description   47'}),
    new Product({ imgUrl:'img/img15.jpg', code: 'PROD48', name: 'Product 48', description:'Product Description   48'}),
    new Product({ imgUrl:'img/img16.jpg', code: 'PROD49', name: 'Product 49', description:'Product Description   49'}),
    new Product({ imgUrl:'img/img17.jpg', code: 'PROD50', name: 'Product 50', description:'Product Description   50'}),
    new Product({ imgUrl:'img/img18.jpg', code: 'PROD51', name: 'Product 51', description:'Product Description   51'}),
    new Product({ imgUrl:'img/img19.jpg', code: 'PROD52', name: 'Product 52', description:'Product Description   52'}),
    new Product({ imgUrl:'img/img20.jpg', code: 'PROD53', name: 'Product 53', description:'Product Description   53'}),
    new Product({ imgUrl:'img/img21.jpg', code: 'PROD54', name: 'Product 54', description:'Product Description   54'}),
    new Product({ imgUrl:'img/img22.jpg', code: 'PROD55', name: 'Product 55', description:'Product Description   55'}),
    new Product({ imgUrl:'img/img23.jpg', code: 'PROD56', name: 'Product 56', description:'Product Description   56'}),
    new Product({ imgUrl:'img/img24.jpg', code: 'PROD57', name: 'Product 57', description:'Product Description   57'}),
    new Product({ imgUrl:'img/img25.jpg', code: 'PROD58', name: 'Product 58', description:'Product Description   58'}),
    new Product({ imgUrl:'img/img26.jpg', code: 'PROD59', name: 'Product 59', description:'Product Description   59'}),
    new Product({ imgUrl:'img/img27.jpg', code: 'PROD60', name: 'Product 60', description:'Product Description   60'}),
    new Product({ imgUrl:'img/img28.jpg', code: 'PROD61', name: 'Product 61', description:'Product Description   61'}),
    new Product({ imgUrl:'img/img29.jpg', code: 'PROD62', name: 'Product 62', description:'Product Description   62'}),
    new Product({ imgUrl:'img/img30.jpg', code: 'PROD63', name: 'Product 63', description:'Product Description   63'})*/
]