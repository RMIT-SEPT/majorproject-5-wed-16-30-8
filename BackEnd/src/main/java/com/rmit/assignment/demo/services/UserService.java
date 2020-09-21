package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.UserRepository;
import com.rmit.assignment.demo.exceptions.UserException;
import com.rmit.assignment.demo.exceptions.UserIdException;
import com.rmit.assignment.demo.model.Employee;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.DiscriminatorValue;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user) {

        try{
            user.setPersonIdentifier(user.getPersonIdentifier().toUpperCase());
            return userRepository.save(user);

        }catch(UserIdException a) {
            throw new UserIdException("User ID is not acceptable");
        }
        catch (Exception e){
            throw new UserException("User ID '"+user.getPersonIdentifier().toUpperCase()+"' already exists");
        }

    }


    public Person findByUserIdentifier(String userId){
//        if(user == null){
//            throw new UserException("User ID '"+userId+"' does not exist");
//
//        }
        try {
            Person user = userRepository.findByPersonIdentifier(userId.toUpperCase());
            return user;
        }catch (Exception e){
            throw new UserException("User ID '"+userId+"' does not exist");
        }
    }

    public Iterable<Person> findAllUsers(){
        return userRepository.findAll();
    }


    public void deleteUserByIdentifier(String userId){
//        User user = userRepository.findByUserIdentifier(userId.toUpperCase());

//        if(user == null){
//            throw  new UserException("Cannot User with ID '"+userId+"'. This user does not exist");
//        }

        try{
            Person user = userRepository.findByPersonIdentifier(userId.toUpperCase());
            userRepository.delete(user);
        }catch (Exception e){
            throw new UserException("Cannot User with ID '"+userId+"'. This user does not exist");
        }


    }
}
