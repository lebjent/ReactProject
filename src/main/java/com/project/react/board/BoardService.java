package com.project.react.board;

import java.util.List;

public interface BoardService {
	
	public List<BoardDTO> getBoardList()throws Exception;
	
	//게시판 작성하기
	public void writeBoard(BoardDTO dto) throws Exception;

}
