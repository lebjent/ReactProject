package com.project.react.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {
    
    @Autowired
    private MemberDAO dao;

    public int idDupChk(String id) throws Exception{

        int chkResult = dao.idDupChk(id);

        return chkResult;
    }

}
