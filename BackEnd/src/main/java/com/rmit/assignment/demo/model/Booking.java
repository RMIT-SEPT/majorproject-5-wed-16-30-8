package com.rmit.assignment.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="booking_identifier")
    private int bookingIdentifier;

    @Column(name="business_identifier")
    private String businessIdentifier;

    @Column(name="business_name")
    private String business_name;


    @Column(name="person_identifier")
    private String personIdentifier;

    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name="booking_Date")
    private Date booking_Date;
    @Column(name="created_At")
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date created_At;

    @Column(name="updated_At")
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    private Date updated_At;

    private String service;
    private String employee_id;

    public Booking(int bookingIdentifier, String business_name, Date booking_Date, String employee_id) {
    }

    public int getBookingIdentifier() {
        return bookingIdentifier;
    }

    public void setBookingIdentifier(int bookingIdentifier) {
        this.bookingIdentifier = bookingIdentifier;
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

    public String getPersonIdentifier() {
        return personIdentifier; }

    public void setPersonIdentifier(String personIdentifier) { this.personIdentifier = personIdentifier; }

    public Date getBooking_Date() {
        return booking_Date;
    }

    public void setBooking_Date(Date booking_Date) {
        this.booking_Date = booking_Date;
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

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(String employee_id) {
        this.employee_id = employee_id;
    }
}
