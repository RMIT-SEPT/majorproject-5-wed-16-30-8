package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Transactional
public interface PersonRepository extends PersonBaseRepository<Person> {

    /*
    Person findByPersonIdentifier(String personId);
    @Override
    Iterable<Person> findAll();
    */
}
