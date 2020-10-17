package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.UserRepository;
import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.exceptions.UserIdException;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //Check if username exist in the system



    public User saveOrUpdateUser(User user) {
        try {
            user.setPersonIdentifier(user.getPersonIdentifier());
            return userRepository.save(user);
        } catch (UserIdException a) {
            throw new UserIdException("User ID is not acceptable");
        } catch (Exception e) {
            throw new UserException("User ID '" + user.getPersonIdentifier() + "' already exists");
        }
    }


    public Person findByUserIdentifier(String userId) {
            System.out.println("1:   "+userId);
            Person user = userRepository.findByPersonIdentifier(userId);
            System.out.println(user.getPersonIdentifier());
            return user;
    }

    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUserByIdentifier(String userId) {
        try {
            User user = userRepository.findByPersonIdentifier(userId);
            userRepository.delete(user);
        } catch (Exception e) {
            throw new UserException("Cannot User with ID '" + userId + "'. This user does not exist");
        }
    }

    public User findByIdentifierPassword(User user){

        User loginUser = userRepository.findByPersonIdentifier(user.getPersonIdentifier());

        User loginPerson2 = matchNameAndPassword(loginUser, user.getPassword());

        if(loginPerson2== null){
            throw new UserException("password not match");
        }
        return loginPerson2;
    }

    private User matchNameAndPassword(User user, String password){

            if(user.getPassword().equals(password)){
                return user;
            }
            System.out.println("\n\n\nEMPLOYEE NOT FOUND\n\n\n");
            return null;
        }

}
