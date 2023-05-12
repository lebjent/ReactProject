package com.project.react.token;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping(value = "/react")
public class TokenController {
    
    @GetMapping("/csrf-token")
    public CsrfToken getCsrfToken(CsrfToken token) {
        log.info("토큰요청");
        return token;
    }

}
