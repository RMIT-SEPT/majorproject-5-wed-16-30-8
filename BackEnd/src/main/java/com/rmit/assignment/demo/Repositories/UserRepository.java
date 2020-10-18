package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByPersonIdentifier(String personId);

    @Query("from User")
    Iterable<User> findAll();
}
