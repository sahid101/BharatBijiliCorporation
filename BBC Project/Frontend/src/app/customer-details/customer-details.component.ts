import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerDetails!: Customer[];
  userResponse: any;
  constructor(private customerServive: CustomerServiceService,private router: Router) { }
  
  ngOnInit(){
    const userResponseString = sessionStorage.getItem('userResponse');
    if (userResponseString) {
      this.userResponse = JSON.parse(userResponseString);
      console.log(this.userResponse.cid);
    }
  }


}
