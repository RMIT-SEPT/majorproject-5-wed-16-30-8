package com.rmit.assignment.demo.Repositories;


import com.rmit.assignment.demo.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;


@NoRepositoryBean
public interface PersonRepository extends CrudRepository<Person, Long> {
    Person findByPersonIdentifier(String personId);

    @Override
    Iterable<Person> findAll();


}
