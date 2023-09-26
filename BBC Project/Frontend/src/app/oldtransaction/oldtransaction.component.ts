import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oldtransaction',
  templateUrl: './oldtransaction.component.html',
  styleUrls: ['./oldtransaction.component.css']
})
export class OldtransactionComponent implements OnInit {

  oldtransactionDetails!: Transaction[];
  custid = sessionStorage.getItem('custid');
  constructor(private http: CustomerServiceService,private router: Router) { }

  ngOnInit(){
    this.getAllPreviousBills();  
  }
  getAllPreviousBills() {

    this.http.getAllPreviousBills(this.custid).subscribe(
      (response) => {
        this.oldtransactionDetails = response as Transaction[];
      }
    );
  }

}
