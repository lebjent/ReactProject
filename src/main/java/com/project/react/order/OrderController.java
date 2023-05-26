package com.project.react.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(value = "/react")
public class OrderController {
    
    @Autowired
    private OrderService service;

    @PostMapping(value = "/orderCoin")
    public ResponseEntity<String> orderCoin(@RequestBody OrderDTO dto) throws Exception {

        log.info("코인 주문");

        try {
            service.orderCoin(dto);
            return ResponseEntity.ok().body("코인 주문이 완료되었습니다."); // Add return statement here
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("코인주문에 실패하였습니다.");
        }

    }    


}
