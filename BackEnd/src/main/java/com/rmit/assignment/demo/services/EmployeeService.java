package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.EmployeeRepository;
import com.rmit.assignment.demo.exceptions.EmployeeException;
import com.rmit.assignment.demo.exceptions.PersonException;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService extends PersonService {

    @Autowired
    private EmployeeRepository employeeRepository;


    public Employee saveOrUpdateEmployee(Employee employee) {

        try{
            employee.setEmployeeIdentifier(employee.getEmployeeIdentifier().toUpperCase());
            return employeeRepository.save(employee);
        }catch (Exception e){
            throw new EmployeeException("Employee ID '" + employee.getEmployeeIdentifier().toUpperCase() + "' already exists");
        }

    }

    public Employee findByEmployeeIdentifier(String employeeId){

        Employee employee = employeeRepository.findByEmployeeIdentifier(employeeId.toUpperCase());

        if(employee == null){
            throw new EmployeeException("Employee ID '"+employeeId+"' does not exist");

        }

        return employee;
    }



}
