package com.rmit.assignment.demo.PersonService;

import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.model.User;
import com.rmit.assignment.demo.services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class UserServiceTest {
    User tony;
    UserService service;
    User marcus;

    @BeforeEach
    void setup() {
        tony = new User(200, "tony", "Customer", "a New person");
        marcus = new User(666, "marcus", "10mil", "creditor");

        service = new UserService();

    }

    @Test
    void incompletePerson() {
        System.out.println("Test 1: Incomplete Person entry");
        Assertions.assertEquals("tony", tony.getName());
    }

    @Test
    void saveOrUpdatePerson_Exception() throws UserException {
        UserException exception = assertThrows(UserException.class, () -> {
            User temp = new User(200, "tony", "Customer", "a New person");
            service.saveOrUpdateUser(temp);
        });
        assertEquals("User ID 'CUSTOMER' already exists", exception.getMessage());
    }

    @Test
    void findByPerson_Exception() throws UserException {
        UserException exception = assertThrows(UserException.class, () -> {
            service.findByUserIdentifier("1423");
        });
        assertEquals("User ID '1423' does not exist", exception.getMessage());
    }

    @Test
    void deletePersonByIdentifier_Exception() throws UserException {
        UserException exception = assertThrows(UserException.class, () -> {
            service.deleteUserByIdentifier("1423");
        });
        assertEquals("Cannot User with ID '1423'. This user does not exist", exception.getMessage());

    }
}
