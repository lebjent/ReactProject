package com.project.react.memo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemoServiceImpl implements MemoService {
    
    @Autowired
    private MemoDAO mDao;

    @Override
    public void insertMemo(MemoDTO dto) throws Exception{
        mDao.insertMemo(dto);
    }
}
