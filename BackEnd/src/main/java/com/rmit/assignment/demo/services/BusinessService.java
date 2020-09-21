package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.Repositories.BusinessRepository;
import com.rmit.assignment.demo.exceptions.BusinessException;
import com.rmit.assignment.demo.model.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    public Business saveOrUpdateBusiness(Business business) {
        try {
            business.setBusinessIdentifier(business.getBusinessIdentifier().toUpperCase());
            return businessRepository.save(business);
        } catch (Exception e) {
            throw new BusinessException("Person ID '" + business.getBusinessIdentifier().toUpperCase() + "' already exists");
        }

    }

    public Business findByBusinessIdentifier(String businessIdentifier) throws BusinessException {

        Business business = businessRepository.findByBusinessIdentifier(businessIdentifier.toUpperCase());

        if (business == null) {
            throw new BusinessException("Business ID '" + businessIdentifier + "' does not exist");
        }
        return business;
    }

    public List<Business> findAllBusiness() {
        return businessRepository.findAll();
    }
}
