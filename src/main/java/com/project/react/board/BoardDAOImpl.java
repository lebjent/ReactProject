package com.project.react.board;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDAOImpl implements BoardDAO {
	
	@Autowired
	private SqlSession sql;

	
	@Override
	public List<BoardDTO> getBoardList() throws Exception {
		
		
		return sql.selectList("boardMapper.getBoardList");
	}

	@Override
	public void writeBoard(BoardDTO dto) throws Exception{

		sql.insert("boardMapper.writeBoard",dto);

	}

	@Override
	public BoardDTO getBoardDetail(int bno) throws Exception{

		return sql.selectOne("boardMapper.getBoardDetail",bno);

	}

}
