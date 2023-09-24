import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllpendingbillComponent } from './allpendingbill/allpendingbill.component';
import { PaymentportalComponent } from './paymentportal/paymentportal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'customer-details', component: CustomerDetailsComponent},
  { path: 'pendingbill',component: AllpendingbillComponent},
  { path: 'paymentportal', component:PaymentportalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
