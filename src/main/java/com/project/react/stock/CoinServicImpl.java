package com.project.react.stock;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoinServicImpl implements CoinService {
    
    @Autowired
    private CoinDAO dao;

    public CoinDTO getCoinInfo (String coin_id) throws Exception{

        return dao.getCoinInfo(coin_id);

    }

    public Map<String,Object> getCoinData(String coin_id) throws Exception{

        //Object 그릇
        Map<String,Object> returnMap = new HashMap<>();

        returnMap.put("BUYDATA", dao.getBuyData(coin_id));
        returnMap.put("SELLDATA", dao.getSellData(coin_id));

        return returnMap;

    }

}
