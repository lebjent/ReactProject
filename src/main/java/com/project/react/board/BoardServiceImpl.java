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

	@Override
	public BoardDTO getBoardDetail(int bno) throws Exception{
		dao.viewCntUpdate(bno);
		return dao.getBoardDetail(bno);
	}

	@Override
	public void deleteBoard(int bno) throws Exception{
		dao.deleteBoard(bno);
	}

	@Override
	public void updateBoard(BoardDTO dto) throws Exception{
		dao.updateBoard(dto);
	}

}
