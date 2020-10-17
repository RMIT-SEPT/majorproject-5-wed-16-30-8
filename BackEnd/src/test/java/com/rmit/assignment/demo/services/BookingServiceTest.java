package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.Repositories.BookingRepository;
import com.rmit.assignment.demo.model.Booking;

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


}
