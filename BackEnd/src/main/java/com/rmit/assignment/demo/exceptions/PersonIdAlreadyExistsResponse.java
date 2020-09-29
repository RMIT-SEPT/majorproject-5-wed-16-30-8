package com.rmit.assignment.demo.exceptions;

public class PersonIdAlreadyExistsResponse {

    private String username;

    public PersonIdAlreadyExistsResponse(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}