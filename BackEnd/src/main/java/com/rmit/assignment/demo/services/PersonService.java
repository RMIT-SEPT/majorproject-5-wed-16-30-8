package com.rmit.assignment.demo.services;

import com.rmit.assignment.demo.Repositories.PersonRepositories;
import com.rmit.assignment.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    @Autowired
    private PersonRepositories personRepositories;

    public Person saveOrUpdatePerson(Person person){
        //business logic

        return personRepositories.save(person);
    }
}
