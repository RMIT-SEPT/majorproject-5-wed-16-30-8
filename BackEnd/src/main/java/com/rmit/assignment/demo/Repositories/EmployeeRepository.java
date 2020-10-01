package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    Employee findByPersonIdentifier(String personId);

//    @Override
    @Query("from Employee")
    Iterable<Employee> findAll();
}
