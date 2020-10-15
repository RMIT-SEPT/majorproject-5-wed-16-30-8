package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.Repositories.BookingRepository;
import com.rmit.assignment.demo.Repositories.BusinessRepository;
import com.rmit.assignment.demo.Repositories.EmployeeRepository;
import com.rmit.assignment.demo.exceptions.BookingException;
import com.rmit.assignment.demo.exceptions.EmployeeException;
import com.rmit.assignment.demo.model.Booking;
import com.rmit.assignment.demo.model.Business;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.services.EmployeeService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.DateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;



import com.rmit.assignment.demo.Repositories.BusinessRepository;
import com.rmit.assignment.demo.exceptions.BusinessException;
import com.rmit.assignment.demo.model.Business;
import com.rmit.assignment.demo.services.BusinessService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@SpringBootTest
public class BookingServiceTest {

    @InjectMocks
    private BookingService bookingService;

    @Mock
    private BookingRepository bookingRepository;

//    @Test
//    @DisplayName("Test 1: Business service find all contains business instance")
//    public void findAllBooking() {
//        Mockito.when(bookingRepository.findAll()).thenReturn(Arrays.asList(
//                new Booking(1, "stark inc", new Date(), "20"),
//                new Booking(2, "evil inc", new Date(), "66")
//        ));
//
//        List<Booking> allBooking = (List<Booking>) bookingService.findAllBooking();
//
//        Assertions.assertEquals(1, allBooking.get(0).getBusiness_name());
//    }

    @Test
    @DisplayName("Test 2: Business service contains two business")
    public void findAllBusinessSize() {
        Mockito.when(bookingRepository.findAll()).thenReturn(Arrays.asList(
                new Booking(1, "stark inc", new Date(), "20"),
                new Booking(2, "evil inc", new Date(), "66")
        ));

        List<Booking> allBooking = (List<Booking>) bookingService.findAllBooking();

        Assertions.assertEquals(2, allBooking.size());
    }

//    @Test
//    @DisplayName("Test 3: Business service find instance with identifier")
//    public void findItemByIdentifier() {
//        Mockito.when(bookingRepository.findByBookingIdentifier(1)).thenReturn(
//                new Booking(1, "stark inc", new Date(), "20")
//        );
//
//        Booking booking = bookingService.findByBookingIdentifier(1);
//
//        Assertions.assertEquals(1, booking.getBookingIdentifier());
//    }


}
