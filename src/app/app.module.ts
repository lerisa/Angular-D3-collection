import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { ToastsManager } from 'ng2-toastr';
import { ToastModule } from 'ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { D3TestComponent } from './d3-test/d3-test.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    D3TestComponent],
  imports: [
   
    ToastModule.forRoot(), BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule,HttpModule,  HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
