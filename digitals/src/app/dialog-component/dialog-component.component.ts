import { Component, Inject, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { CartService } from '../cart.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { json } from 'express';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css'],
  providers:[CartService]
})
export class DialogComponentComponent {
  finaldata: any[] = [];
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _service : CartService) {
     // this.finaldata = _service.getProductData();
    this.finaldata = JSON.parse(localStorage["adata"]);
    console.log(localStorage["adata"]);
    console.log(JSON.parse(localStorage["adata"]));


  }
}