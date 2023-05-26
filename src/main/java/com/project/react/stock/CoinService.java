package com.project.react.stock;

import java.util.Map;

public interface CoinService {
    
    /* 코인의 최신정보 가져오기 */
    public CoinDTO getCoinInfo(String coin_id) throws Exception;
    
    /* 코인의 데이터 가져오기 */
    public Map<String,Object> getCoinData(String coin_id) throws Exception;
}
