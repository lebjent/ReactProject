package com.project.react.member;

import org.springframework.security.crypto.password.PasswordEncoder;

public interface MemberService {

    public int idDupChk(String id) throws Exception;
    
    public void memberJoin(MemberDTO member, PasswordEncoder passwordEncoder) throws Exception;

    public MemberDTO getMemberInfo(String id)throws Exception;

    /* 로그인 확인 */
    public boolean isLoginValid(MemberDTO dto,PasswordEncoder passwordEncoder) throws Exception;

}