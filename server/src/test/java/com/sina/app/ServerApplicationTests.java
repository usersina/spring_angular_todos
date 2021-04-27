package com.sina.app;

import java.util.Date;
import java.util.List;

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
		Todo todo = new Todo("Finish java course", true, new Date());
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
