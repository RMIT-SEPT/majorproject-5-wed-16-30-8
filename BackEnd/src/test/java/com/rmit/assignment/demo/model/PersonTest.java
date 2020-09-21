package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class PersonTest {

    //valid person
    User tony = new User(200, "tony", "Cust", "a New person");
    //name is too short
    User yu = new User(201, "Yu", "", "");
    //has no description
    User jack = new User(202, "Jack", "Cust", "");
    //has a space in the name
    User luka = new User(203, "Luka Smith", "Cust", "full name in name field");
    //has symbols in the name
    User symbols = new User(204, "!*$symbol@%#", "Cust", "has symbols in the name");

    @Test
    public void getNameTest() {
        System.out.println("Test 1: get persons name entry");
        Assertions.assertEquals("tony", tony.getName());
    }

    @Test
    public void getDescTest() {
        System.out.println("Test 1: get persons description entry");
        Assertions.assertEquals("a New person", tony.getDesc());
    }

    @Test
    public void isValidPersonTest() {
        System.out.println("Test 2: the person has valid details");
        Assertions.assertTrue(tony.isValidPerson());
    }

    @Test
    public void isNotValidPersonTest() {
        System.out.println("Test 3: person has invalid details");
        Assertions.assertFalse(yu.isValidPerson());
    }

    @Test
    public void invalidNameTest() {
        System.out.println("Test 4: person has an invalid space in their name");
        Assertions.assertFalse(symbols.isValidPerson());
    }


}