package com.rmit.assignment.demo.model;



import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="user")
//@DiscriminatorValue(value = "USER")
public class User extends Person {


    public User(String name, String personIdentifier, String password, String ph_Num,String address, Date created_At){
        super(name, personIdentifier,password,ph_Num,address, created_At);
    }


    public User() {
    }


}
