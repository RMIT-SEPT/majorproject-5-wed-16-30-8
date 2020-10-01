package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.EmployeeRepository;
import com.rmit.assignment.demo.exceptions.EmployeeException;
import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveOrUpdateEmployee(Employee employee) {
        try {
            employee.setPersonIdentifier(employee.getPersonIdentifier());
            return employeeRepository.save(employee);
        } catch (Exception e) {
            throw new EmployeeException("Person ID '" + employee.getPersonIdentifier() + "' already exists");
        }
    }

    public Employee findByEmployeeIdentifer(String employeeIdentifier) throws EmployeeException {
        Employee employee = employeeRepository.findByPersonIdentifier(employeeIdentifier);

        if (employee == null) {
            throw new EmployeeException("Employee ID '" + employeeIdentifier + "' does not exist");
        }
        return employee;
    }

    public Iterable<Employee> findAllEmployee() {
        return employeeRepository.findAll();
    }

    public void deleteEmployeeByIdentifier(String employeeId) {
        try {
            Employee employee = employeeRepository.findByPersonIdentifier(employeeId);
            employeeRepository.delete(employee);
        } catch (Exception e) {
            throw new UserException("Cannot User with ID '" + employeeId + "'. This user does not exist");
        }
    }
}
