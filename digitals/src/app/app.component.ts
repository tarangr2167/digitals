  import { Component ,OnInit} from '@angular/core';
  import { Form } from '@angular/forms';
  import computer_data from './data.json';
  import { DialogComponentComponent } from './dialog-component/dialog-component.component';
  import { MatDialog } from '@angular/material/dialog';
  import { CartService } from './cart.service';

  interface Computer{
    id:Number;
    computer_name: String;
    Description: String;
    Price: Number;
    Available_quantiy: Number;
    url:String;
  }

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
  })


  export class AppComponent {
    title = 'digitals';
    selected_data:any;
    computer_datas: Computer[]=computer_data;
    productData: any[] = []; 



    
  addToProduct(Computer: any) {
      this.productData.push(Computer);
      localStorage.setItem("adata", JSON.stringify(this.productData));


    }

  constructor(private dialog: MatDialog, private _service : CartService) {}
 
  openDialog(): void {
    if (!this._service.dialogOpened) {
      const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '2500px',
        data: { message: 'This is the popup content!' },
        
      });
    this._service.setProductData(this.productData);
     this._service.dialogOpened = true;



  }


}
  }
