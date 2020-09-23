package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.BookingRepository;
import com.rmit.assignment.demo.exceptions.BookingException;
import com.rmit.assignment.demo.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveOrUpdateBooking(Booking booking) {
        try {
            return bookingRepository.save(booking);
        } catch (Exception e) {
            throw new BookingException("Error Booking was not created");
        }
    }

    public Booking findByBookingIdentifier(long bookingId) {
        Booking booking = bookingRepository.findByBookingIdentifier(bookingId);

        if (booking == null) {
            throw new BookingException("Person ID '" + bookingId + "' does not exist");
        }
        return booking;
    }

    public Iterable<Booking> findAllBooking() {
        return bookingRepository.findAll();
    }
}
