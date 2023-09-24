import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  
  constructor(private loginHttp: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']); 
  }
  navigateToCustomerDetails(){
    this.router.navigate(['/customer-details']);
  }
 

}
