package com.websystique.springmvc.dao;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;

import com.websystique.springmvc.model.User;

@ComponentScan(basePackages = "com.websystique.springmvc.dao")
public interface UserDao {

	public List<User> getUsers();

}
