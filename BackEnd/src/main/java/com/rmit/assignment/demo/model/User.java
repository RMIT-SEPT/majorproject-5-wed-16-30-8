package com.rmit.assignment.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "USER")
public class User extends Person{

    public User(long id, String name, String personIdentifier, String desc) {
        super(id, name, personIdentifier, desc);
    }

    public User() {

    }


}
