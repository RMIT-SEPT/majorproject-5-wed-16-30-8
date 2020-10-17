package com.rmit.assignment.demo.web;


import com.rmit.assignment.demo.model.Booking;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import com.rmit.assignment.demo.services.EmployeeService;
import com.rmit.assignment.demo.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewEmployee(@Valid @RequestBody Employee employee, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Employee employee1 = employeeService.saveOrUpdateEmployee(employee);
        return new ResponseEntity<Employee>(employee1, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Employee> loginAsEmployee(@RequestBody Employee employee){

        Employee employee1 = employeeService.findByIdentifierPassword(employee);

        return new ResponseEntity<Employee>(employee1, HttpStatus.CREATED);
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<?> getEmployeeById(@PathVariable String employeeId) {
        Person employee = employeeService.findByEmployeeIdentifer(employeeId);
        return new ResponseEntity<Person>(employee, HttpStatus.OK);
    }

    @GetMapping("/find/{businessId}")
    public Iterable<Employee> getEmployeeByBusinessId(@PathVariable String businessId) {
        return employeeService.findByBusinessId(businessId);
    }

    @GetMapping("/all")
    public Iterable<Employee> getAllEmployee() {
        return employeeService.findAllEmployee();
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable String employeeId) {
        employeeService.deleteEmployeeByIdentifier(employeeId);
        return new ResponseEntity<String>("User with ID: '" + employeeId + "' was deleted", HttpStatus.OK);
    }

    @PutMapping("/{employeeId}")
    public ResponseEntity<?> updateBusiness(@Valid @RequestBody Employee employee, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Employee employee1 = employeeService.saveOrUpdateEmployee(employee);
        return new ResponseEntity<Employee>(employee1, HttpStatus.CREATED);
    }
}
