package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Date;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class UserServiceTest {
    User tony;
    UserService service;
    User marcus;

    @BeforeEach
    void setup() {
        tony = new User("tony","200","pass","0412345678","address", new Date());
        marcus = new User();

        service = new UserService();

    }

    @Test
    void saveOrUpdatePerson_Exception() throws UserException {
        UserException exception = assertThrows(UserException.class, () -> {
            User temp = new User("tony","200","pass","0412345678","address", new Date());;
            service.saveOrUpdateUser(temp);
        });
        assertEquals("User ID '200' already exists", exception.getMessage());
    }

    @Test
    void deletePersonByIdentifier_Exception() throws UserException {
        UserException exception = assertThrows(UserException.class, () -> {
            service.deleteUserByIdentifier("1423");
        });
        assertEquals("Cannot User with ID '1423'. This user does not exist", exception.getMessage());

    }
}
