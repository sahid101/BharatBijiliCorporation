package com.finzly.bbc.BijiliCorporation.dao;


import org.hibernate.Session; 
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.bbc.BijiliCorporation.entity.Customer;

@Repository
public class CustomerDao {

	@Autowired
	SessionFactory factory;

	public Customer getCustomerById(long cid) {
		Session session = factory.openSession();
		return session.get(Customer.class, cid);
	}

}

