import { Component } from '@angular/core';
import computer_data from '../data.json';


interface Computer{
  id:Number;
  computer_name: String;
  Description: String;
  Price: Number;
  Available_quantiy: Number;
  url:String;
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  computer_datas: Computer[]=computer_data;

}
