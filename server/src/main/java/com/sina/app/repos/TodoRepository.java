package com.sina.app.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sina.app.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
