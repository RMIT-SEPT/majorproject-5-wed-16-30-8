package com.rmit.assignment.demo.services;



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
public class BusinessServiceTest {

    @InjectMocks
    private BusinessService businessService;

    @Mock
    private BusinessRepository businessRepository;

    @Test
    @DisplayName("Test 1: Business service find all contains business instance")
    public void findAllBusiness() {
        Mockito.when(businessRepository.findAll()).thenReturn(Arrays.asList(
                new Business("Stark inc", "1", new Date()),
                new Business("Good inc", "2", new Date())
        ));

        List<Business> allBusiness = businessService.findAllBusiness();

        Assertions.assertEquals("Stark inc", allBusiness.get(0).getBusiness_name());
    }

    @Test
    @DisplayName("Test 2: Business service contains two business")
    public void findAllBusinessSize() {
        Mockito.when(businessRepository.findAll()).thenReturn(Arrays.asList(
                new Business("Stark inc", "1", new Date()),
                new Business("2", "Good inc", new Date())
        ));

        List<Business> allBusiness = businessService.findAllBusiness();

        Assertions.assertEquals(2, allBusiness.size());
    }

    @Test
    @DisplayName("Test 3: Business service find instance with identifier")
    public void findItemByIdentifier() {
        Mockito.when(businessRepository.findByBusinessIdentifier("1")).thenReturn(
                new Business("Stark inc", "1", new Date()));

        Business business = businessService.findByBusinessIdentifier("1");

        Assertions.assertEquals("1", business.getBusinessIdentifier());
    }

    @Test()
    @DisplayName("Test 4: Business service throwing exception due to no such identifier")
    public void findItemNotFound() throws BusinessException {
        Mockito.when(businessRepository.findByBusinessIdentifier("10")).thenReturn(
                null
        );

        Assertions.assertThrows(BusinessException.class, () -> {
            Business business = businessService.findByBusinessIdentifier("1");
        });

    }

}
