import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-paymentportal',
  templateUrl: './paymentportal.component.html',
  styleUrls: ['./paymentportal.component.css']
})
export class PaymentportalComponent implements OnInit {
  transactionId: any;
  customerid: any;
  transaction: any;
  paymentsuccess=false;
  result:any;
  paymentId!: number;
  selectedPaymentMethod!: string;

  constructor(private customerHttp: CustomerServiceService,private route: Router) { }

  ngOnInit(){
    this.transactionId = sessionStorage.getItem('tIdToUse');
    this.customerid = sessionStorage.getItem('custid');
    this.getBill(this.transactionId);
  }

  getBill(transactionId:number){
    this.customerHttp.getBillOfCustomerWithTid(this.transactionId).subscribe(
      (response)=>{
        this.transaction = response;
      },
      (error) => {
        console.error("Error fetching transaction details:", error);
      }
    )
  }
  
  gotoSuccessfulPay(){
    this.route.navigate(['/successfully-paid']);
  }
}
