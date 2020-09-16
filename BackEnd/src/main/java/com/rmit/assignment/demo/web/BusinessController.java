package com.rmit.assignment.demo.web;

import com.rmit.assignment.demo.model.Business;

import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.services.BusinessService;
import com.rmit.assignment.demo.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/business")
@CrossOrigin
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewBusiness(@Valid @RequestBody Business business, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Business business1 = businessService.saveOrUpdateBusiness(business);
        return new ResponseEntity<Business>(business1, HttpStatus.CREATED);
    }

    @GetMapping("/{businessId}")
    public ResponseEntity<?> getPersonById(@PathVariable String businessId
    ){
        Business business = businessService.findByBusinessIdentifier(businessId);
        return new ResponseEntity<Business>(business, HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<Business> getAllBusiness(){return
            businessService.findAllBusiness();}
}
