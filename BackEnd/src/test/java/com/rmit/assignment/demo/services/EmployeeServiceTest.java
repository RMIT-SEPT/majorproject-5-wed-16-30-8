package com.rmit.assignment.demo.services;



import com.rmit.assignment.demo.Repositories.BusinessRepository;
import com.rmit.assignment.demo.Repositories.EmployeeRepository;
import com.rmit.assignment.demo.exceptions.EmployeeException;
import com.rmit.assignment.demo.model.Business;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.services.EmployeeService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@SpringBootTest
class EmployeeServiceTest {

    @InjectMocks
    private EmployeeService employeeService;

    @Mock
    private EmployeeRepository employeeRepository;

    @Test
    @DisplayName("Test 1: Employee service find all employee")
    public void findAllEmployee() {
        Mockito.when(employeeRepository.findAll()).thenReturn(Arrays.asList(
                new Employee("tony","200","pass","0412345678","address", "1", new Date()),
                new Employee("tony","200","pass","0412345678","address", "1", new Date())
        ));

        List<Employee> allEmployee = (List<Employee>) employeeService.findAllEmployee();

        Assertions.assertEquals("tony", allEmployee.get(0).getName());
    }

    @Test
    @DisplayName("Test 2: Employee service find second employee")
    public void findAllEmployee2() {
        Mockito.when(employeeRepository.findAll()).thenReturn(Arrays.asList(
                new Employee("tony","200","pass","0412345678","address", "1", new Date()),
                new Employee("marcus","100","pass","0412345678","address", "2", new Date())
        ));

        List<Employee> allEmployee = (List<Employee>) employeeService.findAllEmployee();

        Assertions.assertEquals("marcus", allEmployee.get(1).getName());
    }

    @Test
    @DisplayName("Test 3: Employee service contains two employees")
    public void findAllEmployeeSize() {
        Mockito.when(employeeRepository.findAll()).thenReturn(Arrays.asList(
                new Employee("tony","200","pass","0412345678","address", "1", new Date()),
                new Employee("tony","200","pass","0412345678","address", "1", new Date())
        ));

        List<Employee> allEmployee = (List<Employee>) employeeService.findAllEmployee();

        Assertions.assertEquals(2, allEmployee.size());
    }
}