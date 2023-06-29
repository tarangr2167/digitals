import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { CartService } from './cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponentComponent
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
         
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}