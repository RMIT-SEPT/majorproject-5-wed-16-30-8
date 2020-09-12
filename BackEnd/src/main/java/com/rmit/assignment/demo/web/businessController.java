package com.rmit.assignment.demo.web;

import com.rmit.assignment.demo.model.Business;

import com.rmit.assignment.demo.services.BusinessService;
import com.rmit.assignment.demo.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/business")
@CrossOrigin
public class businessController {
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
}
