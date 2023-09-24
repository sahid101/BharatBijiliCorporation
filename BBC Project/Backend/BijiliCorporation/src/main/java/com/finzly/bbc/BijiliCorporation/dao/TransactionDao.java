package com.finzly.bbc.BijiliCorporation.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.bbc.BijiliCorporation.entity.Transaction;

@Repository
public class TransactionDao {

	@Autowired
	SessionFactory factory;
	public List<Transaction> getAllTransaction() {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Transaction.class);
		return criteria.list();
	}
	
	public List<Transaction> getTransactionByTid(long tid) {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Transaction.class);
		criteria.add(Restrictions.eq("tId", tid));
		return criteria.list();
	}

	public String getAllTransactionUpdate(Transaction book) {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Transaction.class);
		session.update(book);
		session.beginTransaction().commit();
		return "Transaction Done";
	}
	
	public List<Transaction> findTransactionByDate() {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Transaction.class);
		criteria.addOrder(Order.desc("endDate"));
		return criteria.list();
	}
	
}
