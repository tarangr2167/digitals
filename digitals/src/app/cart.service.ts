import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productdata: any[] = [];

  updateProductData(newData: any[]) {
    this.productdata = newData;
  }

  getProductData(): any[] {
    return this.productdata;
  }




}

