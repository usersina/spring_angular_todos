package com.sina.app.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import com.sina.app.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFirstName(String firstName);

    /**
     * Find the users with a number of todos that's less or equals the given
     * parameter.
     * 
     * @param maxTodosNumber
     * @return List of users.
     */
    @Query("SELECT DISTINCT u FROM User u, Todo t WHERE u.id = t.user.id AND (SELECT COUNT(*) FROM Todo WHERE user.id = u.id) <= ?1")
    List<User> findByTodosLessThan(Long maxTodosNumber);
}
