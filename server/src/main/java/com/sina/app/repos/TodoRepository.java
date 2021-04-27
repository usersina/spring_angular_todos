package com.sina.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sina.app.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
	List<Todo> findByCompleted(boolean isCompleted);

	List<Todo> findByUserId(Long userId);
}
