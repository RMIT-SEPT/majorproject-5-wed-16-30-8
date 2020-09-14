package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.Repositories.BusinessRepository;
import com.rmit.assignment.demo.exceptions.BusinessException;
import com.rmit.assignment.demo.model.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    public Business saveOrUpdateBusiness(Business business){
        try{
            business.setBusinessIdentifier(business.getBusinessIdentifier().toUpperCase());
            return businessRepository.save(business);
        }catch (Exception e){
            throw new BusinessException("Person ID '"+business.getBusinessIdentifier().toUpperCase()+"' already exists");
        }

    }
}
