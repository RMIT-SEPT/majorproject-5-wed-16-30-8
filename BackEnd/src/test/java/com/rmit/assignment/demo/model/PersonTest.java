package com.rmit.assignment.demo.model;

import org.junit.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.internal.matchers.Null;

import static org.junit.jupiter.api.Assertions.*;

class PersonTest {
    //valid person
    Person tony = new Person(200, "tony", "Cust", "a New person");
    //name is too short
    Person yu = new Person(201,"Yu","","");
    //has no description
    Person jack = new Person(202, "Jack","Cust","");
    //has a space in the name
    Person luka = new Person(203, "Luka Smith", "Cust", "full name in name field");
    //has symbols in the name
    Person symbols = new Person(204, "!*$symbol@%#", "Cust", "has symbols in the name");

    @Test
    public void getNameTest(){
        System.out.println("Test 1: get persons name entry");
        Assertions.assertEquals("tony", tony.getName());
    }

    @Test
    public void getDescTest(){
        System.out.println("Test 1: get persons description entry");
        Assertions.assertEquals("a New person", tony.getDesc());
    }

    @Test
    public void isValidPersonTest(){
        System.out.println("Test 2: the person has valid details");
        Assertions.assertTrue(tony.isValidPerson());
    }

    @Test
    public void isNotValidPersonTest(){
        System.out.println("Test 3: person has invalid details");
        Assertions.assertFalse(yu.isValidPerson());
    }

    @Test
    public void invalidNameTest(){
        System.out.println("Test 4: person has an invalid space in their name");
        Assertions.assertFalse(luka.isValidPerson());
    }

}