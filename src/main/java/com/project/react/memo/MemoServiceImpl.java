package com.project.react.memo;

import java.util.List;

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

    @Override
    public List<MemoDTO> getMemoList()throws Exception{
        
        return mDao.getMemoList();        
    
    }

    @Override
    public void memoDelete(MemoDTO dto)throws Exception{

        mDao.memoDelete(dto);

    }

}
