package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Date;

class PersonTest {

//    //valid person
    User tony = new User("tony","200","pass","0412345678","address", new Date());
//    //name is too short
    User yu = new User("yu","211A","pass","0412345678","address", new Date());
//    //has symbols in the name
    User symbols = new User("symbol$$&","300","pass","0412345678","address", new Date());


    @Test
    public void isValidPersonTest() {
        System.out.println("Test 1: the person has valid details");
        Assertions.assertTrue(tony.isValidPerson());
    }

    @Test
    public void isNotValidPersonTest() {
        System.out.println("Test 2: person has invalid details");
        Assertions.assertFalse(yu.isValidPerson());
    }

    @Test
    public void invalidNameTest() {
        System.out.println("Test 3: person has an invalid space in their name");
        Assertions.assertFalse(symbols.isValidPerson());
    }


}

