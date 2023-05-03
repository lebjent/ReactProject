package com.project.react.stock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoinServicImpl implements CoinService {
    
    @Autowired
    private CoinDAO dao;

    public CoinDTO getCoinInfo (String coin_id) throws Exception{

        return dao.getCoinInfo(coin_id);

    }

    public List<PriceDTO> getCoinData(String coin_id) throws Exception{

        List<PriceDTO> resultList = new ArrayList<>();

        resultList = dao.getCoinData(coin_id);

        return resultList;

    }

}
