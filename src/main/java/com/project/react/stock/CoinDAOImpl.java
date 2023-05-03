package com.project.react.stock;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CoinDAOImpl implements CoinDAO {
    

    @Autowired
    private SqlSession sql;

    public CoinDTO getCoinInfo (String coin_id) throws Exception{

        return sql.selectOne("stockMapper.getCoinInfo", coin_id);

    }
    
    public List<PriceDTO> getCoinData(String coin_id) throws Exception{
        return sql.selectList( "stockMapper.getBuyData", coin_id);
    }

}
