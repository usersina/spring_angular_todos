package com.sina.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sina.app.entities.Todo;
import com.sina.app.repos.TodoRepository;
import com.sina.app.repos.UserRepository;

@Service
public class TodoServiceImpl implements TodoService {
	@Autowired
	TodoRepository todoRepository;

	@Autowired
	UserRepository userRepository;

	@Override
	public Todo saveTodo(Todo todo, Long userId) {
		// Get a reference to the user from the provided id
		todo.setUser(userRepository.findById(userId).get());
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

	@Override
	public List<Todo> findByCompleted(boolean isCompleted) {
		return todoRepository.findByCompleted(isCompleted);
	}

	@Override
	public List<Todo> findByUserId(Long userId) {
		return todoRepository.findByUserId(userId);
	}
}
