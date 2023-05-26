package com.project.react.order;

import lombok.Data;

@Data
public class OrderDTO {
    
    private int order_no;

    private String order_type;

    private String coin_name;

    private String order_id;

    private int price;

    private int quantity;

}
