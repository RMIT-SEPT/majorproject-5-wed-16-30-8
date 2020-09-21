package com.rmit.assignment.demo.exceptions;

public class UserIdExceptionResponse {
    private String personIdentifier;

    public UserIdExceptionResponse(String projectIdentifier) {
        this.personIdentifier = projectIdentifier;
    }

    public String getPersonIdentifier() {
        return personIdentifier;
    }

    public void setPersonIdentifier(String personIdentifier) {
        this.personIdentifier = personIdentifier;
    }
}
