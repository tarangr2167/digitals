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
    productdata: any[] = []; 

    addToProduct(Computer: any) {
      this.productdata.push(Computer);
      localStorage.setItem("adata", JSON.stringify(this.productdata));
      console.log(this.productdata)
    }

    constructor(private dialog: MatDialog, private _service : CartService) {
      
    }
    updateList() {
      const updatedData = this.productdata// Update the list as needed
      this._service.updateProductData(updatedData);
    }

    ngOnInit(){}


  
    
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: { message: 'This is the popup content!' }
    });

  }


}
