package com.project.react.board;

import java.util.Date;

import lombok.Data;

@Data
public class BoardDTO {
	
	private int bno;
	private String title;
	private String writer;
	private String content;
	private int like_cnt;
	private int view_cnt;
	private String regdate;
	
}
