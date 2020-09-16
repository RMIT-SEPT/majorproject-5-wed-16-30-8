package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Transactional
public interface EmployeeRepository extends PersonBaseRepository<Employee>{

    Employee findByEmployeeIdentifier(String employeeId);


}
