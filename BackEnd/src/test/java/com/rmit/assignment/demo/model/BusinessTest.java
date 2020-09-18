package com.rmit.assignment.demo.model;

import org.junit.jupiter.api.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BusinessTest {

    Business business1;
    Business business2;
    Business business3;
    Business business4;

    @BeforeAll
    public void initTest(){
        business1 = new Business((long) 1,"Stark inc", "23EAE");

        business2 = new Business((long) 2,"TKT","666");

        business3 = new Business((long) 3,"IdentifierChange","ABC789");

        business4 = new Business((long) 4,"","xyz");

    }
    @Test
    @DisplayName("Test 1: Business passing constraints")
    public void completeBusiness(){
        Assertions.assertEquals("Stark inc", business1.getBusiness_name());
    }

    @Test
    @DisplayName("Test 2: Business identifier change")
    public void changeNameTest(){
        business3.setBusinessIdentifier("XYZ123");
        Assertions.assertEquals("NewName", business3.getBusinessIdentifier());
    }

    @Test
    @DisplayName("Test 3: Business name change fail testing")
    public void changeNameFalseTest(){

    }

    @Test
    @DisplayName("Test 4: Business identifier is valid")
    public void validIdTest(){

    }

    @Test
    @DisplayName("Test 5: Business identifier valid")
    public void

    @Test
    @DisplayName("Test 6: Business identifier valid false test")
    public void
}
