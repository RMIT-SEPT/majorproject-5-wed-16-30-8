package com.rmit.assignment.demo.Repositories;

import com.rmit.assignment.demo.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {
    Booking findByBookingIdentifier(int booking_id);
    Booking findByBusinessIdentifier(String businessIdentifier);
    Booking findByPersonIdentifier(String personIdentifier);

    @Override
    Iterable<Booking> findAll();

    Iterable<Booking> findAllByBusinessIdentifier(String businessIdentifier);
    Iterable<Booking> findAllByPersonIdentifier(String personIdentifier);

}
