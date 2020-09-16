//package com.rmit.assignment.demo.BusinessControllerTest;
//
//import com.rmit.assignment.demo.model.Business;
//import com.rmit.assignment.demo.services.BusinessService;
//import com.rmit.assignment.demo.web.BusinessController;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//import java.util.Arrays;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(BusinessController.class)
//public class BusinessControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private BusinessService businessService;
//
//    @Test
//    public void findAll() throws Exception {
//        Mockito.when(businessService.findAllBusiness()).thenReturn(Arrays.asList(
//                new Business((long) 1,"Stark inc", "23EAE"),
//                new Business((long) 2,"Good inc", "4H3JE")
//        ));
//
//        mockMvc.perform(
//                MockMvcRequestBuilders.get("/api/business/all"))
//                .andExpect(status().isOk())
//                .andExpect(content().json("[{}, {}]"));
//    }
//}
