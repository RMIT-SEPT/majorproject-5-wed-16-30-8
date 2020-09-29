package com.rmit.assignment.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;


@Entity
@Table(name="person")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "ACCOUNT_TYPE", discriminatorType = DiscriminatorType.STRING)
public abstract class Person {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="id")
//    private Long id;
    @Size(min = 3, max = 20, message = "Please enter 3 to 20 characters")
    @NotBlank(message = "Person name is required")
    @Column(name="name")
    private String name;
    @Id
    @NotBlank(message = "Project Identifier is required")
    @Size(min = 4, max = 20, message = "please enter 4 to 20 characters")
    @Column(updatable = false, unique = true)
    //username
    private String personIdentifier;
    @Column(name="created_At")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date created_At;
    @Column(name="updated_At")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date updated_At;
    @Column(name="end_date")
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date end_date;

    @Column(name="address")
    private String address;
    @Column(name="ph_Num")
    private String ph_Num;
    @Column(name="password")
    private String password;

    public Person(String name, String personIdentifier, String password, String ph_Num,String address, Date created_At) {
        this.name = name;
        this.personIdentifier = personIdentifier;
        this.password=password;
        this.ph_Num=ph_Num;
        this.address=address;
        this.created_At=created_At;
    }

    public Person() {
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPh_Num() {
        return ph_Num;
    }

    public void setPh_Num(String ph_Num) {
        this.ph_Num = ph_Num;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPersonIdentifier() {
        return personIdentifier;
    }

    public void setPersonIdentifier(String personIdentifier) {
        this.personIdentifier = personIdentifier;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setUpdated_At(Date update_At) {
        this.updated_At = update_At;
    }

    public boolean isValidPerson() {
        if ((this.getName().length() < 3 || this.getName().length() > 20) || !(this.getName().matches("[A-Z,a-z]+"))) {
            return false;
        }
        if (this.getPersonIdentifier().length() < 4 || this.getPersonIdentifier().length() > 5) {
            return false;
        }

        return true;
    }

    @PrePersist
    protected void onCreate() {
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updated_At = new Date();
    }
}
