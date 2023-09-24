import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseURL = "http://localhost:8080/customer";
  constructor(private httpClient: HttpClient) { }

  getCustomerDetails(cid:any): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}/${cid}`);
  }

  getAllPendingBillsOfCustomer(cid: any):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/get-pending-bills-of-customer/${cid}`);
  }

  getBillOfCustomerWithTid(tId:any):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/get-bill-of-a-cust/${tId}`);
  }
  paymentSuccessful(customerId:any,transactionId: any):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/payment-successful/${customerId}/${transactionId}`);
  }

  setPaymentMode(customerId:any,transactionId:any,paymentId:any):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/payment/${customerId}/${transactionId}/${paymentId}`);
  }


}
