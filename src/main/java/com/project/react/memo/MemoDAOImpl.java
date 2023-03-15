package com.project.react.memo;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemoDAOImpl implements MemoDAO {
    
    @Autowired
    private SqlSession sql;
    
    @Override
    public void insertMemo(MemoDTO dto) throws Exception{

        sql.insert("memoMapper.insertMemo",dto);

    }

}
