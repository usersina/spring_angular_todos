package com.sina.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Service;

import com.sina.app.entities.Todo;
import com.sina.app.entities.User;
import com.sina.app.repos.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {
	@Autowired
	TodoRepository todoRepository;

	@Override
	public Todo saveTodo(Todo todo, Long userId) {
		// Get a reference to the user from the provided id
		todo.setUser(new HibernateTemplate().load(User.class, userId));
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
