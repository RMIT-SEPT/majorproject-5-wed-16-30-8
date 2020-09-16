package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PersonTest {

    @Test
    public void incompletePerson(){
        System.out.println("Test 1: Incomplete Person entry");
        Person person = new Person(200, "tony", "Customer", "a New person");

        Assertions.assertEquals("tony", person.getName());

    }

}