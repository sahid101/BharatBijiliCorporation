package com.finzly.bbc.BijiliCorporation.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long tId;
	private double unitConsumption;
	private String status;
	private double totalAmount;
	private final double rate = 41.50;
	private String referenceNumber;
	private Date startDate;
	private Date endDate;
	
	@OneToOne
	private PaymentMethods paymentMethods;
	
	@OneToOne
	private Customer customer;
	
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public double getRate() {
		return rate;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public double getUnitConsumption() {
		return unitConsumption;
	}

	public void setUnitConsumption(double unitConsumption) {
		this.unitConsumption = unitConsumption;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	private Date transactionDate;
	
	private double transactionTotalAmount;
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public long gettId() {
		return tId;
	}


	public Transaction() {
		
	}

	public void settId(long tId) {
		this.tId = tId;
	}


	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public double getTransactionTotalAmount() {
		return transactionTotalAmount;
	}

	public void setTransactionTotalAmount(double transactionTotalAmount) {
		this.transactionTotalAmount = transactionTotalAmount;
	}

	public String getReferenceNumber() {
		return referenceNumber;
	}

	public void setReferenceNumber(String referenceNumber) {
		this.referenceNumber = referenceNumber;
	}

	public PaymentMethods getPaymentMethods() {
		return paymentMethods;
	}

	public void setPaymentModes(PaymentMethods paymentMethods) {
		this.paymentMethods = paymentMethods;
	}


	
}