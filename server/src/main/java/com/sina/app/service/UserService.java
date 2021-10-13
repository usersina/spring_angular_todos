package com.sina.app.service;

import java.util.List;

import com.sina.app.entities.User;

public interface UserService {
	User saveUser(User user);

	User updateUser(User user);

	void deleteUserById(Long id);

	User getUser(Long id);

	List<User> getAllUsers();

	List<User> getUsersByFirstName(String firstName);

	List<User> getUsersByMaxTodosNumber(Long maxTodosNumber);
}
