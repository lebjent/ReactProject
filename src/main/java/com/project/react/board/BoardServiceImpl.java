package com.project.react.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardDAO dao;

	@Override
	public List<BoardDTO> getBoardList() throws Exception {
		
		return dao.getBoardList();
	}
	
	@Override
	public void writeBoard(BoardDTO dto) throws Exception{

		dao.writeBoard(dto);

	}
}
