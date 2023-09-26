import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-successfully-paid',
  templateUrl: './successfully-paid.component.html',
  styleUrls: ['./successfully-paid.component.css']
})
export class SuccessfullyPaidComponent implements OnInit {

  customerId = sessionStorage.getItem('custid');
  transactionId = sessionStorage.getItem('transactionId');
  
  constructor(private http: CustomerServiceService, private route: Router) { }

  ngOnInit(){
    this.paymentDoneSuccessful();
    console.log(this.customerId);
    console.log(this.transactionId);
  }

  goToLogin(){
    this.route.navigate(['/login']);
  }
  paymentDoneSuccessful(){
      this.http.paymentSuccessful(this.customerId,this.transactionId).subscribe(
        (response)=>{
          console.log(response);
        }
      )
  }

}
