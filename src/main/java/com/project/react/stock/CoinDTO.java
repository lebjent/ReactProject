package com.project.react.stock;

import lombok.Data;

@Data
public class CoinDTO {
    
    private String coin_id;
    private String coin_name;
    private int market_price;
    private int close_price;

}
