package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface PersonBaseRepository <T extends Person> extends CrudRepository<T, Long> {

    T findByPersonIdentifier(String personId);

    @Override
    Iterable<T> findAll();


}
