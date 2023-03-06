package com.project.react.board;

import java.util.List;

public interface BoardDAO {
	
	//게시판 불러오기
	public List<BoardDTO> getBoardList()throws Exception;
	
	//게시판 작성하기
	public void writeBoard(BoardDTO dto) throws Exception;

	//게시판 상세보기
	public BoardDTO getBoardDetail(int bno) throws Exception;
}
