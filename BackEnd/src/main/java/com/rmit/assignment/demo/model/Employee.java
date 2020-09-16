package com.rmit.assignment.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Employee extends Person{

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employee_id;

    @NotBlank(message = "Employee name is required")
    private String employee_name;

    @Size(min=4,max =5, message = "please enter 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String employeeIdentifier;


    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;

    @JsonFormat(pattern = "yyyy-mm-ddd")
    private Date update_At;


    public Employee() {
    }

    public Employee(Long employee_id, String employeeIdentifier, String employee_name) {
        this.employee_id = employee_id;
        this.employeeIdentifier = employeeIdentifier;
        this.employee_name = employee_name;
    }

    public Long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }

    public String getEmployeeIdentifier() {
        return employeeIdentifier;
    }

    public void setEmployeeIdentifier(String employeeIdentifier) {
        this.employeeIdentifier = employeeIdentifier;
    }

    public String getEmployee_name() {
        return employee_name;
    }

    public void setEmployee_name(String employee_name) {
        this.employee_name = employee_name;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }

    public Date getUpdate_At() {
        return update_At;
    }

    public void setUpdate_At(Date update_At) {
        this.update_At = update_At;
    }

}
