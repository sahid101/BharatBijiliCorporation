import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private customerHttp: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  navigateToPendingBill(){
    this.router.navigate(['/pendingbill'])
  }
  navigateToPendingOldTransaction(){
    this.router.navigate(['/oldtransaction'])
  }

}
