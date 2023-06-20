import { Component ,OnInit} from '@angular/core';
import { Form } from '@angular/forms';
import computer_data from './data.json';
// import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';


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
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'digitals';

  // constructor(private dialog: MatDialog) {}
  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}


computer_datas: Computer[]=computer_data;
ngOnInit(): void {}


openPopup(): void {
  const factory = this.resolver.resolveComponentFactory(DialogComponentComponent);
  const componentRef = this.viewContainerRef.createComponent(factory);
}


}