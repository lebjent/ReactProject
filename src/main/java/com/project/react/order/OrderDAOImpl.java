package com.project.react.order;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDAOImpl implements OrderDAO {
    
    @Autowired
    private SqlSession sql;

    //1. 현재 가격정보 불러오기
    public int getNowPrice(String coin_name)throws Exception{
        
        return sql.selectOne("orderMapper.getNowPrice", coin_name);
    
    }

    public int getOrderQuantity(OrderDTO orderDTO) throws Exception{

        return sql.selectOne("orderMapper.getOrderQuantity", orderDTO);
    }

    public void orderCoin(OrderDTO orderDTO) throws Exception{

        sql.insert("orderMapper.orderCoin", orderDTO);

    }

    /* 주문이 되는 가격이 있는지를 체크하는 용도 */
    public int chkBuyPrice(OrderDTO dto)throws Exception{

        return sql.selectOne("orderMapper.chkBuyPrice", dto);

    }

    /* 주문이 되는 가격이 있는지를 체크하는 용도 */
    public int chkSellPrice(OrderDTO dto)throws Exception{

        return sql.selectOne("orderMapper.chkSellPrice", dto);

    }

    /* 가격이 없으면 새롭게 insert */
    public void insertCoinTradeData(OrderDTO dto) throws Exception{

        sql.insert("orderMapper.insertCoinTradeData", dto);

    }

    /* 가격이 있으면 update */
    public void updateCoinTradeData(OrderDTO dto) throws Exception{

        sql.update("orderMapper.updateCoinTradeData", dto);

    }
}
