package com.websystique.springmvc.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.websystique.springmvc.model.User;

public class UserDaoImpl implements UserDao {
	@Autowired
	private SessionFactory sessionFactory;

	public Session session() {
		return sessionFactory.getCurrentSession();
	}

	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return session().createQuery("from Player").list();
	}

}
