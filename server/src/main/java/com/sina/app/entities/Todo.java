package com.sina.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private boolean completed;

	@ManyToOne
	private User user;

	public Todo() {
		super();
	}

	public Todo(String title, boolean completed) {
		super();
		this.title = title;
		this.completed = completed;
	}

	public Todo(Long id, String title, boolean completed) {
		super();
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", title=" + title + ", completed=" + completed + "]";
	}

	@JsonProperty("userId")
	public Long getUser() {
		return user.getId();
	}

	public void setUser(User user) {
		this.user = user;
	}
}
