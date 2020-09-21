package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends PersonRepository {
    @Override
    @Query("from Employee")
    Iterable<Person> findAll();
}
