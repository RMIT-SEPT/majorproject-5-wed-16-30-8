package com.rmit.assignment.demo.Repositories;


import com.rmit.assignment.demo.model.Business;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessRepository extends CrudRepository<Business, Long> {
    Business findByBusinessIdentifier(String businessId);
    @Override
    Iterable<Business> findAll();
}
