package com.project.react.stock;

import lombok.Data;

@Data
public class PriceDTO {
    
    private int price;
    private int quantity;
    private String order_type;
    private String coin_id;

}
