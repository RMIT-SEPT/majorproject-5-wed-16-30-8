package com.rmit.assignment.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.Date;

@Entity
@DiscriminatorValue(value = "EMPLOYEE")
public class Employee extends Person {
    private String businessId;

    public Employee(String name, String personIdentifier, String password, String ph_Num, String address, String businessId, Date created_At

    ) {
        super(name, personIdentifier, password, ph_Num, address, created_At);
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
