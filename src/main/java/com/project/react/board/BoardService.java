package com.project.react.board;

import java.util.List;

import com.project.react.common.page.SearchCriteria;

public interface BoardService {
	
	//게시글 리스트 가져오기
	public List<BoardDTO> getBoardList(SearchCriteria scri)throws Exception;
	
	//게시글 전체개수 가져오기
	public int getBoardCount(SearchCriteria scri)throws Exception;

	//게시판 작성하기
	public void writeBoard(BoardDTO dto) throws Exception;

	//게시판 상세보기
	public BoardDTO getBoardDetail(int bno) throws Exception;

	//게시판 삭제하기
	public void deleteBoard(int bno) throws Exception;

	//게시판 수정하기
	public void updateBoard(BoardDTO dto) throws Exception;
}
