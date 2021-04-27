package com.sina.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sina.app.entities.Todo;
import com.sina.app.repos.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {
	@Autowired
	TodoRepository todoRepository;

	@Override
	public Todo saveTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	@Override
	public Todo updateTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	@Override
	public void deleteTodoById(Long id) {
		todoRepository.deleteById(id);
	}

	@Override
	public Todo getTodo(Long id) {
		return todoRepository.findById(id).get();
	}

	@Override
	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}
}
