import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-allpendingbill',
  templateUrl: './allpendingbill.component.html',
  styleUrls: ['./allpendingbill.component.css']
})
export class AllpendingbillComponent implements OnInit {
   
  transactionDetails!: Transaction[];
  custid = sessionStorage.getItem('custid');
  constructor(private loginHttp: CustomerServiceService, private router: Router) { }

  ngOnInit(){
    this.getAllPendingBills();   
    console.log(this.transactionDetails); 
  }
  getAllPendingBills() {

    this.loginHttp.getAllPendingBillsOfCustomer(this.custid).subscribe(
      (response) => {
        this.transactionDetails = response;
      }
    );
  }
  gotopaymentportal(transactionid: number){
    const tIdToUse = transactionid;    
    sessionStorage.setItem('tIdToUse', tIdToUse.toString());
    this.router.navigate(['/paymentportal']);
  }

}
