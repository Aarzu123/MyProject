package com.jwt.example.jwt.controllers;

import com.jwt.example.jwt.entities.User;
import com.jwt.example.jwt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private UserService userService;
    //http://localhost:8083/home/user
    //http://localhost:8083/login?logout
    //http://localhost:8083/home/user?continue&continue
    @GetMapping("/user")
    public List<User> getUsers()
    {
        System.out.println("Home controller");
        return  userService.getUsers();
    }
    @GetMapping("/current-user")
    public String getLoggedInUser(Principal principal)
    {
        return principal.getName();
    }
}
