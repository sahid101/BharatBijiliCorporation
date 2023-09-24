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

  changePaymentMethod(selectedPaymentMethod:string) {
    console.log(selectedPaymentMethod);
    if(selectedPaymentMethod === "debit"){
      this.paymentId = 1;
    }
    if(selectedPaymentMethod === "credit"){
      this.paymentId = 2;
    }
    if(selectedPaymentMethod === "wallet"){
      this.paymentId = 3;
    }
    this.customerHttp.setPaymentMode(this.customerid,this.transactionId,this.paymentId).subscribe(
      (response)=>{
        this.result = response;
        console.log(this.result);
      },(error) => {
        console.error("Error setting payment mode:", error);
      }
    );
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
  
  payTransaction(){
    this.customerHttp.paymentSuccessful(this.customerid,this.transactionId).subscribe(
      (paymentStatus)=>{
        console.log("payment Status--->  ", JSON.stringify(paymentStatus));
        this.paymentsuccess=true;
      }
    )
  }
}
