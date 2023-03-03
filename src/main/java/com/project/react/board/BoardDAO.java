package com.project.react.board;

import java.util.List;

public interface BoardDAO {
	
	//게시판 불러오기
	public List<BoardDTO> getBoardList()throws Exception;
	
}
