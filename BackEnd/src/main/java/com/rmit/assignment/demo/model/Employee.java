package com.rmit.assignment.demo.model;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
public class Employee extends Person {
    @Column(name="business_id")
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
