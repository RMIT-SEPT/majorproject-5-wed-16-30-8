package com.rmit.assignment.demo.PersonService;

import com.rmit.assignment.demo.exceptions.PersonException;
import com.rmit.assignment.demo.exceptions.PersonIdException;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.services.PersonService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class PersonServiceTest {
    Person tony;
    PersonService service;
    Person marcus;

    @BeforeEach
    void setup() {
        tony = new Person(200, "tony", "Customer", "a New person");
        marcus = new Person(666, "marcus", "10mil", "creditor");

        service = new PersonService();
//        service.saveOrUpdatePerson(marcus);
    }

    @Test
    void incompletePerson() {
        System.out.println("Test 1: Incomplete Person entry");
        Assertions.assertEquals("tony", tony.getName());
    }

    @Test
    void saveOrUpdatePerson_Exception() throws PersonException {
        PersonException exception = assertThrows(PersonException.class, () -> {
            Person temp = new Person(200, "tony", "Customer", "a New person");
            service.saveOrUpdatePerson(temp);
        });
        assertEquals("Person ID 'CUSTOMER' already exists", exception.getMessage());
    }

    @Test
    void findByPerson_Exception() throws PersonException {
        PersonException exception = assertThrows(PersonException.class, () -> {
            service.findByPersonIdentifier("1423");
        });
        assertEquals("Person ID '1423' does not exist", exception.getMessage());
    }

    @Test
    void deletePersonByIdentifier_Exception() throws PersonException {
        PersonException exception = assertThrows(PersonException.class, () -> {
            service.deletePersonByIdentifier("1423");
        });
        assertEquals("Cannot Person with ID '1423'. This person does not exist", exception.getMessage());

    }

//    @Test
//    void saveOrUpdatePerson_Exception2() throws PersonException, PersonIdException {
//        PersonIdException exception = assertThrows(PersonIdException.class,()->{
//            Person temp = new Person(212, "tony", "Custome234524352345r", "a New person");
//            service.saveOrUpdatePerson(temp);
//        });
//        assertEquals("Error has occured", exception.getMessage());
//    }
}
