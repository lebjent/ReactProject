package com.project.react.common.token;


import java.util.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtTokenUtil {
    // JWT 토큰 생성을 위한 시크릿 키
    private static final String SECRET_KEY = KeyGenerator.generateRandomKey();

    public static String generateToken(String id) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 86400000); // 토큰 만료 시간 설정 (24시간)

        return Jwts.builder()
                .setSubject(id)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
}
