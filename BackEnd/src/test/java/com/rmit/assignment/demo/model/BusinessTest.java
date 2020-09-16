package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BusinessTest {

    Business business1;
    Business business2;

    @BeforeAll
    public void initTest(){
        business1 = new Business((long) 1,"Stark inc", "23EAE");

        business2 = new Business((long) 2,"TKT","666");

    }
    @Test
    @DisplayName("Test 1: Business passing constraints")
    public void completeBusiness(){
        Assertions.assertEquals("Stark inc", business1.getBusiness_name());
    }



}
