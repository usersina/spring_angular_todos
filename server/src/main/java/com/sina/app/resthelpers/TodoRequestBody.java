package com.sina.app.resthelpers;

import lombok.Data;

/**
 * This is used to match the request body sent from a POST request to the Todo
 * class. It is used since the Todo class needs to have a User object instead of
 * the provided userId.
 */
@Data
public class TodoRequestBody {
	private Long id;
	private String title;
	private boolean completed;
	private Long userId;
}
