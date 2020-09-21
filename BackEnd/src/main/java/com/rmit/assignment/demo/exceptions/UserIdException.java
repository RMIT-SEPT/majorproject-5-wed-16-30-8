package com.rmit.assignment.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class UserIdException extends RuntimeException {
    public UserIdException(String message) {
        super(message);
    }
}


