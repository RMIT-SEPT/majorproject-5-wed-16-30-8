package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    Employee findByPersonIdentifier(String personId);

    @Query("from Employee")
    Iterable<Employee> findAll();
    Iterable<Employee> findAllByBusinessId(String businessId);

}
