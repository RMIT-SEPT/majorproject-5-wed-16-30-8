package com.rmit.assignment.demo.web;


import com.rmit.assignment.demo.model.Booking;
import com.rmit.assignment.demo.services.BookingService;
import com.rmit.assignment.demo.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewBooking(@Valid @RequestBody Booking booking, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Booking booking1 = bookingService.saveOrUpdateBooking(booking);
        return new ResponseEntity<Booking>(booking1, HttpStatus.CREATED);
    }

    @GetMapping("/{bookingId}")
    public ResponseEntity<?> getBookingById(@PathVariable int bookingId) {
        Booking booking = bookingService.findByBookingIdentifier(bookingId);
        return new ResponseEntity<Booking>(booking, HttpStatus.OK);
    }

    @GetMapping("/business/{businessIdentifier}")
    public Iterable<Booking> getAllBookingsByBusiness(@PathVariable String businessIdentifier) {
        return bookingService.findAllBookingByBusiness(businessIdentifier);
    }

    @GetMapping("/user/{personIdentifier}")
    public Iterable<Booking> getAllBookingsByPerson(@PathVariable String personIdentifier) {
        return bookingService.findAllBookingByPerson(personIdentifier);
    }

    @GetMapping("/all")
    public Iterable<Booking> getAllBookings() {
        return bookingService.findAllBooking();
    }

    @DeleteMapping("/{bookingId}")
    public ResponseEntity<?> deleteBooking(@PathVariable String bookingId) {
        bookingService.deleteBooking(bookingId);
        return new ResponseEntity<String>("User with ID: '" + bookingId + "' was deleted", HttpStatus.OK);
    }

    @PutMapping("/{bookingId}")
    public ResponseEntity<?> updateBooking(@Valid @RequestBody Booking booking, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Booking booking1 = bookingService.saveOrUpdateBooking(booking);
        return new ResponseEntity<Booking>(booking1, HttpStatus.CREATED);
    }


}
