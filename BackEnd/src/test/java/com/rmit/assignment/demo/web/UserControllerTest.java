package com.rmit.assignment.demo.web;

import com.rmit.assignment.demo.Repositories.UserRepository;
import com.rmit.assignment.demo.model.User;
import com.rmit.assignment.demo.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

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
}