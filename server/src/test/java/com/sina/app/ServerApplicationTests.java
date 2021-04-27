package com.sina.app;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.sina.app.entities.Todo;
import com.sina.app.repos.TodoRepository;

@SpringBootTest
class ServerApplicationTests {
	@Autowired
	private TodoRepository todoRepository;

	@Test
	public void testCreateTodo() {
		Todo todo = new Todo("Make an application", false, new Date());
		todoRepository.save(todo);
	}
}
