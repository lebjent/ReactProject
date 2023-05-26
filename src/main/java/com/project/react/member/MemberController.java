package com.project.react.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.react.common.token.JwtTokenUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping(value = "/react")
@RestController
public class MemberController {

    @Autowired
    private  PasswordEncoder passwordEncoder;

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

	@PostMapping(value = "/memberJoin")
    public ResponseEntity<String> memberJoin(@RequestBody MemberDTO memberDTO) {
        log.info("회원가입 진행");
        try {
            service.memberJoin(memberDTO, passwordEncoder);
            return ResponseEntity.ok().body("회원가입이 완료되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입이 실패하였습니다.");
        }
    }

    @PostMapping("/memberLogin")
    public ResponseEntity<String> login(@RequestBody MemberDTO member) throws Exception {
        
        log.info("로그인시도");

        try {
            boolean isValidLogin = service.isLoginValid(member,passwordEncoder);
            if (isValidLogin) {
                          // 로그인 성공 시, JWT 토큰 생성
                          String token = JwtTokenUtil.generateToken(member.getId());

                          // JWT 토큰을 클라이언트에게 전달
                          return ResponseEntity.ok().header("Authorization", "Bearer " + token).body("로그인 성공");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("로그인 중 오류가 발생했습니다.");
        }

    }

    @PostMapping(value = "/getMemberInfo")
    public MemberDTO getMemberInfo(@RequestBody MemberDTO dto) throws Exception {
        
        MemberDTO member = new MemberDTO();

        try {
            member = service.getMemberInfo(dto.getId());
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return member;

    }
}