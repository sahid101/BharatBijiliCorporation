import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  customerId : any='';
  otp : any='';
  otpDisabled: boolean = true;
  otpMatched: boolean = false; 
  randomFourDigitNumber !: number;
  custid!:number;

  constructor(private loginHttp: CustomerServiceService,private router: Router) { }

  ngOnInit(): void {
    this.onSubmit();
  }

  generateOtp() {
    //this.randomFourDigitNumber = 1;
    this.randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    alert(this.randomFourDigitNumber);
    this.otpDisabled = false;
  }

  onSubmit(){
    if (this.otp === this.randomFourDigitNumber.toString()) {
        this.loginHttp.getCustomerDetails(this.customerId).subscribe(response => {
          if (response != null) {
            console.log(response);
            console.log("OTP Matched. You can proceed with login.");
            this.otpMatched = true;
            sessionStorage.setItem('userResponse', JSON.stringify(response));
            sessionStorage.setItem('custid', this.customerId);
            this.router.navigate(['/home']);
          } else {
            console.log("Data does not exist");
            this.otpMatched = false;
          }
        });
      } else {
        console.log("OTP does not match. Please try again.");
        this.otpMatched = false;
      }
    }
    
}
