package com.project.react.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {
    
    @Autowired
    private MemberDAO dao;

    public int idDupChk(String id) throws Exception{

        int chkResult = dao.idDupChk(id);

        return chkResult;
    }

    public MemberDTO getMemberInfo(String id)throws Exception{

        MemberDTO member = dao.getMemberInfo(id);
        
        return member;

    }

    //회원가입(암호화처리 로직포함)
    public void memberJoin(MemberDTO member, PasswordEncoder encoder) throws Exception{
        
        String password = encoder.encode(member.getPassword());
        member.setPassword(password);
        
        dao.memberJoin(member);
    }

    //비밀번호가 일치한지 체크
    public boolean isLoginValid(MemberDTO dto,PasswordEncoder passwordEncoder) throws Exception {
        
        MemberDTO member = dao.getMemberInfo(dto.getId());
        
        boolean chkResult = false;

        if(member != null && passwordEncoder.matches(dto.getPassword(), member.getPassword())){
            chkResult = true;
        }else{
            chkResult = false;
        }

        return chkResult;
    }

}
