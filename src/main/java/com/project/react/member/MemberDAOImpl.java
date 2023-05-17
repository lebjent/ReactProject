package com.project.react.member;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAOImpl implements MemberDAO {
    
    @Autowired
    private SqlSession sql;

    /* 아이디 중복체크 */
    public int idDupChk(String id) throws Exception{

        return sql.selectOne("memberMapper.idDupChk", id);

    }

    /* 회원가입 */
    public void memberJoin(MemberDTO member)throws Exception{

        sql.insert("memberMapper.memberJoin", member);

    }

    /* 회원정보 가져오기 */
    public MemberDTO getMemberInfo(String id) throws Exception{

        MemberDTO member = sql.selectOne("memberMapper.getMemberInfo", id);

        return member;
    }

}
