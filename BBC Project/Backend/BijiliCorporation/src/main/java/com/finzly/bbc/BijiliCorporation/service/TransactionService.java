package com.finzly.bbc.BijiliCorporation.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finzly.bbc.BijiliCorporation.dao.TransactionDao;
import com.finzly.bbc.BijiliCorporation.entity.Customer;
import com.finzly.bbc.BijiliCorporation.entity.Transaction;

@Service
public class TransactionService {
	@Autowired
	TransactionDao transactionDao;
	

	public List<Transaction> getAllPendingBillsOfCustomer(long id) {
		List<Transaction> list = transactionDao.getAllTransaction();
		List<Transaction> al = new ArrayList<>();
		for (Transaction transaction : list) {
			Customer cId = transaction.getCustomer();
			if (cId.getCid() == id && transaction.getStatus().equals("pending")) {
				al.add(transaction);
			}
		}
		return al;
	}

	public Transaction getBillOfCustomerWithTid(long tid) {
		List<Transaction> list = transactionDao.getAllTransaction();
		for (Transaction transaction : list) {
			Customer cId = transaction.getCustomer();
			if (transaction.gettId() == tid && transaction.getStatus().equals("pending")) {
				return transaction;
			}
		}
		return null;
	}

	public Transaction Payment(long id, long tid) {
		List<Transaction> list = transactionDao.getTransactionByTid(tid);
		for (Transaction transaction : list) {
			Customer cId = transaction.getCustomer();
			if (cId.getCid() == id) {
				transaction.setStatus("success");
				return transaction;
			}
		}
		return null;
	}

	public List<Transaction> successfulPreviousPayment(long id) {
		List<Transaction> list = transactionDao.getAllTransaction();
		List<Transaction> al = new ArrayList<>();
		for (Transaction transaction : list) {
			Customer customer = transaction.getCustomer();
			if((customer.getCid()==id) && (transaction.getStatus().equals("success"))) {
				al.add(transaction);
			}
		}
		return al;
	}


}
