package com.sina.app.service;

import java.util.List;

import com.sina.app.entities.Todo;

public interface TodoService {
	Todo saveTodo(Todo todo);

	Todo updateTodo(Todo todo);

	void deleteTodoById(Long id);

	Todo getTodo(Long id);

	List<Todo> getAllTodos();
}
