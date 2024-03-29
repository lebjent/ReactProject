package com.project.react.stock;

import java.util.List;

public interface CoinDAO {
    

    /* 코인의 최신정보 가져오기 */
    public CoinDTO getCoinInfo (String coin_id) throws Exception;

    /* 코인의 매수 데이터 가져오기 */
    public List<PriceDTO> getBuyData(String coin_id) throws Exception;

    /* 코인의 매도 데이터 가져오기 */
    public List<PriceDTO> getSellData(String coin_id) throws Exception;
}
