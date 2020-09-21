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
            booking.setBookingIdentifier(booking.getBookingIdentifier().toUpperCase());
            return bookingRepository.save(booking);
        } catch (Exception e) {
            throw new BookingException("Booking ID '" + booking.getBookingIdentifier().toUpperCase() + "'already exists");
        }
    }

    public Booking findByBookingIdentifier(String bookingId) {
        Booking booking = bookingRepository.findByBookingIdentifier(bookingId.toUpperCase());

        if (booking == null) {
            throw new BookingException("Person ID '" + bookingId + "' does not exist");
        }
        return booking;
    }

    public Iterable<Booking> findAllBooking() {
        return bookingRepository.findAll();
    }
}
