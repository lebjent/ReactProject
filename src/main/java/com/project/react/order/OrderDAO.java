package com.project.react.order;

public interface OrderDAO {
    
    /* 1. 코인의 현재가격정보 가져오기 */
    public int getNowPrice(String coin_id) throws Exception;

    public int getOrderQuantity(OrderDTO orderDTO) throws Exception;
    
    /* 실질적으로 주문이 들어가는 경우 */
    public void orderCoin(OrderDTO orderDTO) throws Exception;

    /* 주문이 되는 매수가격이 있는지를 체크하는 용도 */
    public int chkBuyPrice(OrderDTO dto)throws Exception;

    /* 주문이 되는 매도가격이 있는지를 체크하는 용도 */
    public int chkSellPrice(OrderDTO dto)throws Exception;

    /* 가격이 없으면 새롭게 insert */
    public void insertCoinTradeData(OrderDTO dto) throws Exception;

    /* 가격이 있으면 update */
    public void updateCoinTradeData(OrderDTO dto) throws Exception;

}
