package com.jwt.example.jwt.Model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString

public class jwtRequest {
    private  String email;
    private  String password;

}
