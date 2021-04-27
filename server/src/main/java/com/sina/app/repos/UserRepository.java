package com.sina.app.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sina.app.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
