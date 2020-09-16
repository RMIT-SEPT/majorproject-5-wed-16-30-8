package com.rmit.assignment.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long booking_id;

    @Size(min = 3, max = 20, message = "Please enter 3 to 20 characters")
    @NotBlank(message = "Booking Identifier is required")
    @Column(updatable = false, unique = true)
    private String bookingIdentifier;

    private long business_id;
    @NotBlank(message = "Business name required")
    private String business_name;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date booking_date;

    public Booking() {
    }

    public String getBookingIdentifier() {
        return bookingIdentifier;
    }

    public void setBookingIdentifier(String bookingIdentifer) {
        this.bookingIdentifier = bookingIdentifer;
    }

    public long getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(long booking_id) {
        this.booking_id = booking_id;
    }

    public long getBusiness_id() {
        return business_id;
    }

    public void setBusiness_id(long business_id) {
        this.business_id = business_id;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    public Date getBooking_date() {
        return booking_date;
    }

    public void setBooking_date(Date booking_date) {
        this.booking_date = booking_date;
    }
}
