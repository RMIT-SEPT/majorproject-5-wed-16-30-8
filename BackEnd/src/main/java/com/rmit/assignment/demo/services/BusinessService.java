package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.Repositories.BusinessRepository;
import com.rmit.assignment.demo.exceptions.BusinessException;
import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.model.Business;
import com.rmit.assignment.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    public Business saveOrUpdateBusiness(Business business) {
        System.out.println(business.getBusinessIdentifier());
        System.out.println(business.getBusiness_name());

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

//    public void deleteUserByIdentifier(String userId) {
//        try {
//            Person user = userRepository.findByPersonIdentifier(userId.toUpperCase());
//            userRepository.delete(user);
//        } catch (Exception e) {
//            throw new UserException("Cannot User with ID '" + userId + "'. This user does not exist");
//        }
//    }
    public void deleteBusiness(String businessId){
        try{
            Business business = businessRepository.findByBusinessIdentifier(businessId);
            businessRepository.delete(business);
        }catch (Exception e) {
            throw new UserException("There is an error with deleting business id: '"+businessId+"'");
        }

    }


}
