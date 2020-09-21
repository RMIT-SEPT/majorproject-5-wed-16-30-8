package com.rmit.assignment.demo.services;


import com.rmit.assignment.demo.Repositories.PersonRepository;
import com.rmit.assignment.demo.exceptions.PersonException;
import com.rmit.assignment.demo.exceptions.PersonIdException;
import com.rmit.assignment.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public Person saveOrUpdatePerson(Person person) {
        System.out.println(person.getName());
        System.out.println(person.getPersonIdentifier());
        System.out.println(person.getId());

        try{
            person.setPersonIdentifier(person.getPersonIdentifier().toUpperCase());
            System.out.println(person.getPersonIdentifier());
            return personRepository.save(person);

        }catch(PersonIdException a) {
            throw new PersonIdException("Person ID is not acceptable");
        }
        catch (Exception e){
            throw new PersonException("Person ID '"+person.getPersonIdentifier().toUpperCase()+"' already exists");
        }

    }


    public Person findByPersonIdentifier(String personId){
//        if(person == null){
//            throw new PersonException("Person ID '"+personId+"' does not exist");
//
//        }
        try {
            Person person = personRepository.findByPersonIdentifier(personId.toUpperCase());
            return person;
        }catch (Exception e){
            throw new PersonException("Person ID '"+personId+"' does not exist");
        }
    }

    public Iterable<Person> findAllPersons(){
        return personRepository.findAll();
    }


    public void deletePersonByIdentifier(String personId){
//        Person person = personRepository.findByPersonIdentifier(personId.toUpperCase());

//        if(person == null){
//            throw  new PersonException("Cannot Person with ID '"+personId+"'. This person does not exist");
//        }

        try{
            Person person = personRepository.findByPersonIdentifier(personId.toUpperCase());
            personRepository.delete(person);
        }catch (Exception e){
            throw new PersonException("Cannot Person with ID '"+personId+"'. This person does not exist");
        }


    }
}
