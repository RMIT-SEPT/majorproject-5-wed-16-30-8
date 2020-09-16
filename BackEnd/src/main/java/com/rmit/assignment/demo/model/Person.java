package com.rmit.assignment.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 3, max=20, message = "Please enter 3 to 20 characters")
    @NotBlank(message = "Person name is required")
    private String name;
    @NotBlank(message ="Project Identifier is required")
    @Size(min=4,max =5, message = "please enter 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String personIdentifier;
    @NotBlank(message = "Description is required")
    private String desc;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date update_At;

    public Person(long id, String name, String personIdentifier, String desc) {
        this.id = id;
        this.name = name;
        this.personIdentifier = personIdentifier;
        this.desc = desc;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
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

    public boolean isValidPerson(){
        if((this.getName().length()<3 || this.getName().length()>20) && this.getName().matches("[A-Z]+")){
            return false;
        }
        if(this.getPersonIdentifier().length()<4 || this.getPersonIdentifier().length()>5){
            return false;
        }
        if(this.getDesc().equals(" ") || this.getDesc().isEmpty()){
            return false;
        }

        return true;
    };
}
