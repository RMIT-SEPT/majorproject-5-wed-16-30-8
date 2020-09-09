package controller;

import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping("")
    public ResponseEntity<Person> createNewPerson(@RequestBody Person person){
        Person personx = personService.saveOrUpdatePerson(person);
        return new ResponseEntity<Person>(person, HttpStatus.CREATED);
    }


}


