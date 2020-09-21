package com.rmit.assignment.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "EMPLOYEE")
public class Employee extends Person{
    private String businessIdentifier;

    public Employee(long id, String name, String personIdentifier, String desc, String businessIdentifier) {
        super(id, name, personIdentifier, desc);
        this.businessIdentifier = businessIdentifier;
    }

    public Employee() {

    }

    public String getBusinessIdentifier() {
        return businessIdentifier;
    }

    public void setBusinessIdentifier(String businessIdentifier) {
        this.businessIdentifier = businessIdentifier;
    }
}
