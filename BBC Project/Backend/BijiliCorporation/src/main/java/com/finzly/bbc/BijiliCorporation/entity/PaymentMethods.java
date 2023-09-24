package com.finzly.bbc.BijiliCorporation.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PaymentMethods {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long pid;
	private String modes;  
    

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public String getModes() {
		return modes;
	}

	public void setModes(String modes) {
		this.modes = modes;
	}
	
	
	
}
