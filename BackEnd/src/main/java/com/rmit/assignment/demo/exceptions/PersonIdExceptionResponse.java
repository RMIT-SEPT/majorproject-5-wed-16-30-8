package com.rmit.assignment.demo.exceptions;

public class PersonIdExceptionResponse {
    private String personIdentifier;

    public PersonIdExceptionResponse(String projectIdentifier) {
        this.personIdentifier = projectIdentifier;
    }

    public String getPersonIdentifier() {
        return personIdentifier;
    }

    public void setPersonIdentifier(String personIdentifier) {
        this.personIdentifier = personIdentifier;
    }
}
