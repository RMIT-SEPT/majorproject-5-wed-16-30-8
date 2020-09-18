package com.rmit.assignment.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long business_id;

    @NotBlank(message = "Business name is required")
    private String business_name;

    @Size(min=4,max =5, message = "please enter 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String businessIdentifier;



    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date update_At;

//    @ElementCollection
//    @CollectionTable(name="listOfUsers")
//    private ArrayList<String> courses = new ArrayList<String>();

    public Business(){

    }

    public Business(Long business_id,String business_name,String businessIdentifier) {
        this.business_id = business_id;
        this.business_name = business_name;
        this.businessIdentifier = businessIdentifier;
    }

    public Long getBusiness_id() {
        return business_id;
    }

    public void setBusiness_id(Long business_id) {
        this.business_id = business_id;
    }

    public String getBusinessIdentifier() {
        return businessIdentifier;
    }

    public void setBusinessIdentifier(String businessIdentifier) {
        this.businessIdentifier = businessIdentifier;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
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

    public boolean isBlank() {
        if (getBusiness_name().isEmpty() || getBusiness_name().equals("")){
            return true;
        }
        return false;
    }

    public boolean validIdentifier() {
        if (getBusinessIdentifier().length()<4 || getBusinessIdentifier().length()>5){
            return false;
        }
        if (!(getBusinessIdentifier().matches("[A-Z,a-z,0-9]+"))){
            return false;
        }
        return true;
    }
}
