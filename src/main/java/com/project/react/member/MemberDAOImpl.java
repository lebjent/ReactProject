package com.project.react.member;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAOImpl implements MemberDAO {
    
    @Autowired
    private SqlSession sql;

    public int idDupChk(String id) throws Exception{

        return sql.selectOne("memberMapper.idDupChk", id);

    }

}
