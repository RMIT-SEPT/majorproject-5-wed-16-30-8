package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepositories extends CrudRepository<Person, Long> {
    @Override
    Iterable<Person> findAllById(Iterable<Long> iterable);
}
