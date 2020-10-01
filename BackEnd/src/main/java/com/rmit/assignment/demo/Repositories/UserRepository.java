package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

//    @Override
//    @Query("from User")
    User findByPersonIdentifier(String personId);

//    @Override
    @Query("from User")
    Iterable<User> findAll();
}
