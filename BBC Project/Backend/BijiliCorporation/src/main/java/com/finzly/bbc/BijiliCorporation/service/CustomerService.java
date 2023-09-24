package com.finzly.bbc.BijiliCorporation.service;


import java.util.ArrayList;  
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.bbc.BijiliCorporation.dao.CustomerDao;
import com.finzly.bbc.BijiliCorporation.dao.TransactionDao;
import com.finzly.bbc.BijiliCorporation.entity.Customer;
import com.finzly.bbc.BijiliCorporation.entity.PaymentMethods;
import com.finzly.bbc.BijiliCorporation.entity.Transaction;


@Service
public class CustomerService {

	@Autowired
	CustomerDao customerDao;
	@Autowired
	TransactionDao transactionDao;
	
	
	public Customer getCustomerById(long cid) {
		return customerDao.getCustomerById(cid);
	}

	public String paymentMode(long id, long tid, long pid) {
		List<Transaction> list = transactionDao.getAllTransaction();		
		PaymentMethods paymode = customerDao.getPaymentModeByPid(pid);
		for (Transaction transaction : list) {
			Customer customer = transaction.getCustomer();
			if((customer.getCid()==id) && (transaction.gettId()==tid) && (transaction.getStatus().equals("pending"))){
				transaction.getPaymentMethods().setPid(pid);
				return "Successfully added the payment method";
			}
		}
		return "Not Found.";
	}


	
	
}
