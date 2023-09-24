package com.finzly.bbc.BijiliCorporation.controller;


import java.util.List;   

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.bbc.BijiliCorporation.entity.Customer;
import com.finzly.bbc.BijiliCorporation.entity.Transaction;
import com.finzly.bbc.BijiliCorporation.service.CustomerService;
import com.finzly.bbc.BijiliCorporation.service.TransactionService;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	CustomerService customerService;
	@Autowired
	TransactionService transactionService;
	
	@GetMapping("/{cid}")
	public Customer getCustomerById(@PathVariable long cid) {
		return customerService.getCustomerById(cid);
	} 
	
	//all pending bills of a customer
	@GetMapping("/get-pending-bills-of-customer/{id}")
	public List<Transaction> getAllPendingBillsOfCustomer(@PathVariable long id){
		return transactionService.getAllPendingBillsOfCustomer(id);
		
	}
	
	//current pending bill of a customer
	@GetMapping("get-bill-of-a-cust/{tid}")
	public Transaction getBillOfCustomerWithTid(@PathVariable long tid){
		return transactionService.getBillOfCustomerWithTid(tid);
		
	}
	//setting payment methods/mode
	@GetMapping("payment/{id}/{tid}/{pid}")
	public String paymentMode(@PathVariable long id,@PathVariable long tid, @PathVariable long pid) {
		return customerService.paymentMode(id, tid, pid);
	}
	
	//payment done with tId, id    
	@GetMapping("payment-successful/{id}/{tid}")
	public Transaction Payment(@PathVariable long id,@PathVariable long tid) {
		return transactionService.Payment(id, tid);
	}
	
	//previous successful payments
	@GetMapping("successful-previous-payment/{id}")
	public List<Transaction> successfulPreviousPayment(@PathVariable long id) {
		return transactionService.successfulPreviousPayment(id);
	}
	
}
