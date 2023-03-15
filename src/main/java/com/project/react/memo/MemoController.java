package com.project.react.memo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Slf4j
@RestController
public class MemoController {
    
    @Autowired
    private MemoService service;

    @PostMapping(value="/react/insertMemo")
    public ResponseEntity<String> insertMemo(@RequestBody MemoDTO dto) {
        try {
            service.insertMemo(dto);
            return ResponseEntity.ok().body("메모가 등록되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("메모 등록에 실패했습니다.");
        }
    }
    

}
