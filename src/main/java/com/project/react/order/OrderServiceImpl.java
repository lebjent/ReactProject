package com.project.react.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDAO dao;

    public void orderCoin(OrderDTO dto)throws Exception{
        
        //코인의 현재 가격 가져오기
        int nowPrice = dao.getNowPrice(dto.getCoin_name());
        //요청한 가격
        int requestPrice = dto.getPrice();
        //요청 수량
        int requestQuantity = dto.getQuantity();

        //매수/매도 타입
        String orderType = dto.getOrder_type();
        //주문한 금액이 COIN_TRADE테이블에 존재한지 I:U를 체크하기 위함
        int chkBuyPrice = dao.chkBuyPrice(dto);
        int chkSellPrice = dao.chkSellPrice(dto);

        int quantity = 0;

        if(orderType.equals("BUY")){
            if(chkBuyPrice>0 || chkSellPrice>0){
                //매수수량이 없는지 있는지 체크
                quantity = dao.getOrderQuantity(dto);

                if(quantity>0){
                    dto.setQuantity(quantity+requestQuantity);
                    dao.updateCoinTradeData(dto);
                }else{
                    dto.setOrder_type("SELL");
                    quantity = dao.getOrderQuantity(dto);
                    if(quantity-requestQuantity<=0){
                        dto.setQuantity(0);
                        dto.setOrder_type("SELL");
                        dao.updateCoinTradeData(dto);
                        if(chkBuyPrice>0){
                            dto.setQuantity(Math.abs(quantity-requestQuantity));
                            dto.setOrder_type("BUY");
                            dao.updateCoinTradeData(dto);
                        }else{
                            dto.setQuantity(Math.abs(quantity-requestQuantity));
                            dto.setOrder_type("BUY");
                            dao.insertCoinTradeData(dto);
                        }
                    }else{
                        dto.setQuantity(quantity-requestQuantity);
                        dao.updateCoinTradeData(dto);
                    }
                }
            }else{
                dao.insertCoinTradeData(dto);
            }
        }else if(orderType.equals("SELL")){

        }

        //dao.orderCoin(dto);
    
    }

}
