// import { Component, Inject, Input, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-dialog-component',
//   templateUrl: './dialog-component.component.html',
//   styleUrls: ['./dialog-component.component.css'],
//   providers:[CartService]
// })
// export class DialogComponentComponent implements OnInit{
//   productdata: any[] = [];
 
//   constructor( private _service : CartService) {

//   }

//   ngOnInit(): void {
//     this.productdata = this._service.getProductData();
//     console.log(this.productdata)

//   }


  
  
// }
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css'],
})
export class DialogComponentComponent implements OnInit {
  productdata: any[] = [];
  

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.productData$.subscribe((data: any[]) => {
      this.productdata = data;
      console.log(this.productdata);
    });
  }
  closeDialog(){
    if(!this.cartService.dialogOpened){
    this.cartService.dialogOpened = false;
  }
  }
}