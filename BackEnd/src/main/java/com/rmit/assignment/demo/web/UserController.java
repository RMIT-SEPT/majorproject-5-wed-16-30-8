package com.rmit.assignment.demo.web;

import com.rmit.assignment.demo.model.Business;
import com.rmit.assignment.demo.model.Person;
import com.rmit.assignment.demo.model.User;
import com.rmit.assignment.demo.model.User;
import com.rmit.assignment.demo.services.MapValidationErrorService;
import com.rmit.assignment.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewUser(@Valid @RequestBody User user, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;
        User user1 = userService.saveOrUpdateUser(user);
        return new ResponseEntity<User>(user1, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginAsUser(@RequestBody User user) {

        User user1 = userService.findByIdentifierPassword(user);

        return new ResponseEntity<User>(user1, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable String userId) {
        Person user = userService.findByUserIdentifier(userId);
        return new ResponseEntity<Person>(user, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        userService.deleteUserByIdentifier(userId);
        return new ResponseEntity<String>("User with ID: '" + userId + "' was deleted", HttpStatus.OK);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateBusiness(@Valid @RequestBody User user, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        User user1 = userService.saveOrUpdateUser(user);
        return new ResponseEntity<User>(user1, HttpStatus.CREATED);
    }
}
