package com.rmit.assignment.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class PersonIdException extends RuntimeException{
    public PersonIdException(String message){
        super(message);
    }
}


