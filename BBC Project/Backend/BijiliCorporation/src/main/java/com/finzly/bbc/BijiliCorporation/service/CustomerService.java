package com.finzly.bbc.BijiliCorporation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.bbc.BijiliCorporation.dao.CustomerDao;
import com.finzly.bbc.BijiliCorporation.dao.TransactionDao;
import com.finzly.bbc.BijiliCorporation.entity.Customer;

@Service
public class CustomerService {

	@Autowired
	CustomerDao customerDao;
	@Autowired
	TransactionDao transactionDao;
	
	
	public Customer getCustomerById(long cid) {
		return customerDao.getCustomerById(cid);
	}

//	public String paymentMode(long id, long tid, long pid) {
//		List<Transaction> list = transactionDao.getAllTransaction();
//		for(Transaction transaction: list) {
//			Customer customer = transaction.getCustomer();
//			PaymentMethods paymentMethods = transaction.getPaymentMethods();
//			if((customer.getCid()==id) && (transaction.gettId()==tid) && (transaction.getStatus().equals("pending"))) {
//				paymentMethods.setPid(pid);
//				System.out.println(paymentMethods);
//				return "Successfully added";
//			}
//		}
//		return "Not Found";
//		
//		
//		
//		
////		List<Transaction> list = transactionDao.getAllTransaction();
////		for (Transaction transaction : list) {
////			Customer customer = transaction.getCustomer();
////			PaymentMethods paymode = transaction.getPaymentMethods();
////			if((customer.getCid()==id) && (transaction.gettId()==tid) && (transaction.getStatus().equals("pending"))){
////				System.out.println(paymode);
////				transaction.setPaymentModes(paymode);
////				System.out.println(transaction);
////				return "Successfully added the payment method";
////			}
////		}
////		return "Not Found.";
//	}


	
	
}
