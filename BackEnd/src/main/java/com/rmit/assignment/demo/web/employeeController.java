package com.rmit.assignment.demo.web;

import com.rmit.assignment.demo.exceptions.PersonException;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
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
public class employeeController extends personController {

   @Autowired
   private EmployeeService employeeService;

   @Autowired
   private MapValidationErrorService mapValidationErrorService;

   @PostMapping("/")
   public ResponseEntity<?> createNewEmployee(@Valid @RequestBody Employee employee, BindingResult result){
      ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
      if(errorMap!=null) return errorMap;

      Employee project1 = employeeService.saveOrUpdateEmployee(employee);
      return new ResponseEntity<Employee>(project1, HttpStatus.CREATED);
   }

   @GetMapping("/{employeeId}")
   public ResponseEntity<?> getPersonById(@PathVariable String employeeId){

      Employee employee = employeeService.findByEmployeeIdentifier(employeeId);

      return new ResponseEntity<Employee>(employee, HttpStatus.OK);
   }



}
