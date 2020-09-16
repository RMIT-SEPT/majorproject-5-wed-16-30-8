package com.rmit.assignment.demo.Repositories;


import com.rmit.assignment.demo.exceptions.BusinessException;
import com.rmit.assignment.demo.model.Business;
import javassist.NotFoundException;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusinessRepository extends CrudRepository<Business, Long> {
    Business findByBusinessIdentifier(String businessId) throws BusinessException;
    @Override
    List<Business> findAll() ;
}
