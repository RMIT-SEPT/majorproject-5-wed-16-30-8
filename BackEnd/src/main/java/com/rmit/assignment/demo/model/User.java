package com.rmit.assignment.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.Date;

@Entity
@DiscriminatorValue(value = "USER")
public class User extends Person {

    public User(String name, String personIdentifier, String desc, Date start_date, Date end_date, Date created_At, Date update_At) {
        super();
    }


    public User() {

    }


}
