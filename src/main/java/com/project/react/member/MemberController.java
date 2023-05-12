package com.project.react.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping(value = "/react")
@RestController
public class MemberController {

    @Autowired
    private MemberService service;
    
    @PostMapping(value = "/idDupChk")
    public ResponseEntity<Integer> idDupChk(@RequestBody String id) throws Exception{
        log.info("아이디 중복체크");
        try {
            int idDupChk = service.idDupChk(id);
            return new ResponseEntity<>(idDupChk, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}