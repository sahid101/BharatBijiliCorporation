import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AllpendingbillComponent } from './allpendingbill/allpendingbill.component';
import { PaymentportalComponent } from './paymentportal/paymentportal.component';
import { OldtransactionComponent } from './oldtransaction/oldtransaction.component';
import { SuccessfullyPaidComponent } from './successfully-paid/successfully-paid.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerDetailsComponent,
    HomeComponent,
    HeaderComponent,
    AllpendingbillComponent,
    PaymentportalComponent,
    OldtransactionComponent,
    SuccessfullyPaidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
