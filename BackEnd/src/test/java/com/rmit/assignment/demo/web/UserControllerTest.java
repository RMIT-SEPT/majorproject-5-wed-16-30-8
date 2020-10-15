package com.rmit.assignment.demo.web;

import com.rmit.assignment.demo.Repositories.UserRepository;
import com.rmit.assignment.demo.model.User;
import com.rmit.assignment.demo.services.UserService;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.*;
import org.mockito.Mockito.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.CoreMatchers.is;
///

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@WebMvcTest(controllers = UserController.class)
@ActiveProfiles("test")
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;
    private UserRepository userRepository;

    private List<User> userList;

    @BeforeEach
    void setUp() {
        this.userList = new ArrayList<>();
        this.userList.add(new User("tony","200","pass","0412345678","address", new Date()));
    }

//    @Test
//    void createNewUser() throws Exception {
//        User newUser = new User("tony","200","pass","0412345678","address", new Date());
//        given(userService.saveOrUpdateUser(newUser)).willAnswer((invocation) -> invocation.getArgument(0));
//
//
//
//        this.mockMvc.perform(post("/api/user/all")
//        )
//
//    }
//
//    @Test
//    void getUserById() throws Exception {
//        String userId = "1";
//        User user = new User("tony","200","pass","0412345678","address", new Date());
//
//        given(userService.findByUserIdentifier(userId)).willReturn(Optional.of(user));
////        given(userRepository.findByPersonIdentifier(userId)).willReturn(Optional.of(user));
//
//        this.mockMvc.perform(get("/api/user/{userId}"))
//                .andExpect(jsonPath("$.name", is(user.getName())))
//                .andExpect(jsonPath("$.personIdentifier", is(user.getPersonIdentifier())))
//                .andExpect(jsonPath("$.created_At", is(user.getCreated_At())))
//                .andExpect(jsonPath("$.updated_At", is(user.getUpdated_At())))
//                .andExpect(jsonPath("$.address", is(user.getAddress())))
//                .andExpect(jsonPath("$.ph_Num", is(user.getPh_Num())))
//                .andExpect(jsonPath("$.password", is(user.getPassword())))
//                .andExpect(jsonPath("$.validPerson", is(true)));
//    }
//
//    @Test
//    void getAllUsers() {
//    }
}