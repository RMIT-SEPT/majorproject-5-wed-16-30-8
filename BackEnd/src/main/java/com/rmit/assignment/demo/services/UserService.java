package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.UserRepository;
import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.exceptions.UserIdException;
import com.rmit.assignment.demo.exceptions.PersonIdAlreadyExistsException;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user) {

        try {
            user.setPersonIdentifier(user.getPersonIdentifier().toUpperCase());
            return userRepository.save(user);

        } catch (UserIdException a) {
            throw new UserIdException("User ID is not acceptable");
        } catch (Exception e) {
            throw new UserException("User ID '" + user.getPersonIdentifier().toUpperCase() + "' already exists");
        }

    }

    public Person findByUserIdentifier(String userId) {

        try {
            Person user = userRepository.findByPersonIdentifier(userId.toUpperCase());
            return user;
        } catch (Exception e) {
            throw new UserException("User ID '" + userId + "' does not exist");
        }
    }

    public Iterable<Person> findAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUserByIdentifier(String userId) {
        try {
            Person user = userRepository.findByPersonIdentifier(userId.toUpperCase());
            userRepository.delete(user);
        } catch (Exception e) {
            throw new UserException("Cannot User with ID '" + userId + "'. This user does not exist");
        }


    }

    public User saveUserRegistration (User registeringUser){
        try{
            registeringUser.setPassword(bCryptPasswordEncoder.encode(registeringUser.getPassword()));
            registeringUser.setPersonIdentifier(registeringUser.getPersonIdentifier());
            registeringUser.setPassword("");
            return userRepository.save(registeringUser);
        }catch (Exception e){
            System.out.println("error at save Registration");
            throw new PersonIdAlreadyExistsException("Person Identifier '"+registeringUser.getPersonIdentifier()+"' already exists");
        }
    }
}
