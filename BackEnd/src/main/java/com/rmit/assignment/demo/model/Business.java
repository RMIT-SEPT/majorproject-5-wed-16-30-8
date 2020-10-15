package com.rmit.assignment.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
@Table(name="business")
@Entity
public class Business {

    @Column(name="business_name")
    @NotBlank(message = "Business name is required")
    private String business_name;
    @Id
    @Size(min = 4, max = 20, message = "please enter 4 to 5 characters")
    @Column(updatable = false, unique = true, name="business_identifier")
    private String businessIdentifier;
    @Column(name="created_At")
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date created_At;
    @Column(name="updated_At")
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date updated_At;

    //service need a way to be stored

    public Business() {
    }

    public Business( String business_name, String businessIdentifier, Date created_At) {
        this.created_At=created_At;
        this.business_name = business_name;
        this.businessIdentifier = businessIdentifier;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    public String getBusinessIdentifier() {
        return businessIdentifier;
    }

    public void setBusinessIdentifier(String businessIdentifier) {
        this.businessIdentifier = businessIdentifier;
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

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }


    public boolean validIdentifier() {

        if (!(getBusinessIdentifier().matches("[0-9]+"))) {
            return false;
        }
        return true;
    }
}
