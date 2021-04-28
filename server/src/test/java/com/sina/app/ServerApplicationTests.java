package com.sina.app;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.sina.app.entities.Todo;
import com.sina.app.entities.User;
import com.sina.app.repos.TodoRepository;
import com.sina.app.repos.UserRepository;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TodoRepository todoRepository;

	// User tests
	@Test
	public void testCreateUser() {
		User user = new User("Carl", "Johnson", "cj@gmail.com", "123", new Date());
		userRepository.save(user);
	}

	// Todo tests
	@Test
	public void testCreateTodo() {
		Todo todo = new Todo("Make an angular frontend", false);
		todo.setUser(userRepository.findById(1L).get());
		todoRepository.save(todo);
	}

	@Test
	public void testFindTodoByCompleted() {
		List<Todo> todos = todoRepository.findByCompleted(false);
		for (Todo todo : todos) {
			System.out.println(todo);
		}
	}

	@Test
	public void testFindTodoByUserId() {
		List<Todo> todos = todoRepository.findByUserId(1L);
		for (Todo todo : todos) {
			System.out.println(todo);
		}
	}
}
