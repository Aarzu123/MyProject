package com.jwt.example.jwt.Model;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    private  String jwtToken;
    private String username;
}
