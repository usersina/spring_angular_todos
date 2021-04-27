package com.sina.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.sina.app.service.TodoService;

@Controller
public class TodoController {
	@Autowired
	TodoService todoService;
	// TESTME:
	// TodoService todoService = new TodoServiceImpl();

}
