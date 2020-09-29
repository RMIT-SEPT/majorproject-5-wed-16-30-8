package com.rmit.assignment.demo.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PersonIdAlreadyExistsException extends RuntimeException {

    public PersonIdAlreadyExistsException(String message) {
        super(message);
    }
}
