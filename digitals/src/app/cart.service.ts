// import { Injectable } from '@angular/core';
// import { AppComponent } from './app.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   public productData: any[] = [];

//   constructor() { }

//   setProductData(data: any[]): void {
//     this.productData = data;
//     console.log(this.productData)
//     debugger
    
//   }

//   getProductData(): any[] {

//     return this.productData;
    

//   }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productDataSubject = new BehaviorSubject<any[]>([]);
  public productData$ = this.productDataSubject.asObservable();
  
  dialogOpened = false;
  constructor() {  }


  
  setProductData(data: any[]): void {
    this.productDataSubject.next(data);
    console.log(this.productDataSubject.value);

    
  }
  
}




// }

