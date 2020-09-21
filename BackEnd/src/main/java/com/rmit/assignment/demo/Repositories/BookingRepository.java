package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {
    Booking findByBookingIdentifier(String bookingId);

    @Override
    Iterable<Booking> findAll();
}
