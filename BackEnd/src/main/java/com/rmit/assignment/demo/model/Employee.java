package com.rmit.assignment.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "EMPLOYEE")
public class Employee extends Person {
    private String businessId;

    public Employee(long id, String name, String personIdentifier, String password, String ph_Num,String address, String businessId) {
        super(id, name, personIdentifier, password,ph_Num,address);
        this.businessId = businessId;
    }

    public Employee() {

    }

    public String getBusinessId() {
        return businessId;
    }

    public void setBusinessId(String businessId) {
        this.businessId = businessId;
    }
}
