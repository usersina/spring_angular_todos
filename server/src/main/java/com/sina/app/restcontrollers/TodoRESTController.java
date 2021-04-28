package com.sina.app.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sina.app.entities.Todo;
import com.sina.app.resthelpers.TodoRequestBody;
import com.sina.app.service.TodoService;

@RestController
@RequestMapping("/todos")
@CrossOrigin
public class TodoRESTController {

	@Autowired
	TodoService todoService;

	@RequestMapping(method = RequestMethod.POST)
	public Todo createTodo(@RequestBody TodoRequestBody todoBody) {
		return todoService.saveTodo(new Todo(todoBody.getTitle(), todoBody.isCompleted()), todoBody.getUserId());
	}

	/**
	 * @param userId (optional defaults to null)
	 * @return A list of todos, if the userId is specified only return the todos
	 *         having that userId.
	 */
	@RequestMapping(method = RequestMethod.GET)
	public List<Todo> getAllTodos(@RequestParam(required = false) Long userId) {
		return userId == null ? todoService.getAllTodos() : todoService.findByUserId(userId);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Todo getTodoById(@PathVariable("id") Long id) {
		return todoService.getTodo(id);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Todo updateTodo(@RequestBody TodoRequestBody todoBody) {
		return todoService.saveTodo(new Todo(todoBody.getId(), todoBody.getTitle(), todoBody.isCompleted()),
				todoBody.getUserId());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteTodo(@PathVariable("id") Long id) {
		todoService.deleteTodoById(id);
	}
}
