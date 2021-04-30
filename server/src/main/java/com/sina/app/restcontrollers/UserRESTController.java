package com.sina.app.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sina.app.entities.User;
import com.sina.app.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserRESTController {

	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.POST)
	public User createUser(@RequestBody User user) {
		return userService.saveUser(user);
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User getUserById(@PathVariable("id") Long id) {
		return userService.getUser(id);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public User updateUser(@RequestBody User user) {
		return userService.saveUser(user);
	}

	@RequestMapping(value = "/{userId}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("userId") Long userId) {
		userService.deleteUserById(userId);
	}
}
