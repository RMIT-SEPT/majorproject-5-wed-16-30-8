package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
public class BusinessTest {

    @Autowired
    Business business1;
    Business invalidIdentifier;


    @BeforeAll
    public void initTest() {
        business1 = new Business("Stark inc", "1", new Date());
        invalidIdentifier = new Business("bossbaby inc", "abc", new Date());
    }

}
