//package com.rmit.assignment.demo.model;
//
//import org.junit.jupiter.api.*;
//
//@TestInstance(TestInstance.Lifecycle.PER_CLASS)
//public class BusinessTest {
//
//    Business business1;
//    Business business2;
//    Business businessChangeName;
//    Business blankName;
//    Business business3;
//    Business business4;
//    Business invalidIdentifier;
//
//
//    @BeforeAll
//    public void initTest() {
//        business1 = new Business((long) 1, "Stark inc", "23EAE");
//        business2 = new Business((long) 2, "TKT", "6666");
//        business3 = new Business((long) 5, "IdentifierChange", "ABC789");
//        business4 = new Business((long) 6, "", "xyz");
//        businessChangeName = new Business((long) 3, "XYZ", "1234");
//        blankName = new Business((long) 4, "", "12345");
//        invalidIdentifier = new Business((long) 6, "", "xyz");
//    }
//
//    @Test
//    @DisplayName("Test 1: Business passing constraints")
//    public void completeBusiness() {
//        Assertions.assertEquals("Stark inc", business1.getBusiness_name());
//    }
//
//    @Test
//    @DisplayName("Test 2: Business name is not blank")
//    public void nameBlankTest() {
//        Assertions.assertTrue(blankName.isBlank());
//    }
//
//    @Test
//    @DisplayName("Test 3: Business name is not blank")
//    public void nameNotBlankTest() {
//        Assertions.assertFalse(business1.isBlank());
//    }
//
//    @Test
//    @DisplayName("Test 4: Business identifier change")
//    public void changeNameTest() {
//        business4.setBusinessIdentifier("XYZ123");
//        Assertions.assertEquals("XYZ123", business4.getBusinessIdentifier());
//    }
//
//    @Test
//    @DisplayName("Test 5: Business name change fail testing")
//    public void changeNameFalseTest() {
//        business3.setBusinessIdentifier("123QWE");
//        Assertions.assertNotEquals("ABC789", business3.getBusinessIdentifier());
//    }
//
//    @Test
//    @DisplayName("Test 6: Business identifier is valid")
//    public void validIdTest() {
//        //   System.out.println(business3.getBusinessIdentifier());
//        Assertions.assertTrue(business2.validIdentifier());
//    }
//
//    @Test
//    @DisplayName("Test 7: Business identifier valid false test")
//    public void invalidIdTest() {
//        Assertions.assertFalse(invalidIdentifier.validIdentifier());
//    }
//}
