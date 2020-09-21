package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.EmployeeRepository;
import com.rmit.assignment.demo.exceptions.EmployeeException;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.DiscriminatorValue;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveOrUpdateEmployee(Employee employee){
        try{
            employee.setPersonIdentifier(employee.getPersonIdentifier().toUpperCase());
            return employeeRepository.save(employee);
        }catch (Exception e){
            throw new EmployeeException("Person ID '" + employee.getPersonIdentifier().toUpperCase() +"' already exists");
        }
    }

    public Person findByEmployeeIdentifer(String employeeIdentifier) throws EmployeeException{
        Person employee = employeeRepository.findByPersonIdentifier(employeeIdentifier.toUpperCase());

        if(employee == null){
            throw new EmployeeException("Employee ID '" + employeeIdentifier + "' does not exist");
        }
        return employee;
    }

    public  Iterable<Person> findAllEmployee() {
//



        return employeeRepository.findAll();}
}
