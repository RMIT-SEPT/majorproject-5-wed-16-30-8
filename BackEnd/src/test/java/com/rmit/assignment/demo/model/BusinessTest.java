package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BusinessTest {

    Business business1;
    Business business2;
    Business businessChangeName;
    Business blankName;

    @BeforeAll
    public void initTest(){
        business1 = new Business((long) 1,"Stark inc", "23EAE");

        business2 = new Business((long) 2,"TKT","666");

        businessChangeName = new Business((long) 3,"XYZ","1234");

        blankName = new Business(long) 4,"","12345");

    }
    @Test
    @DisplayName("Test 1: Business passing constraints")
    public void completeBusiness(){
        Assertions.assertEquals("Stark inc", business1.getBusiness_name());
    }

    @Test
    @DisplayName("Test 2: Business name is changed")
    public void testSetIdentifier(){
        businessChangeName.setBusinessIdentifier("5678");
        Assertions.assertEquals("5678",businessChangeName.getBusinessIdentifier());
    }

    @Test
    @DisplayName("Test 3: Business name is not blank")
    public void testNotBlank(){
        Assertions.assertTrue(blankName.);
    }



}
