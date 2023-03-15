package com.project.react.memo;

import java.util.Date;

import lombok.Data;

@Data
public class MemoDTO {
    
    private int mno;
    private String mtitle;
    private String mcontent;
    private Date regdate;

}
