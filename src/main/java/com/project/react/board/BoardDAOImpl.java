package com.project.react.board;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.react.common.page.SearchCriteria;

@Repository
public class BoardDAOImpl implements BoardDAO {
	
	@Autowired
	private SqlSession sql;

	
	@Override
	public List<BoardDTO> getBoardList(SearchCriteria scri) throws Exception {
		
		
		return sql.selectList("boardMapper.getBoardList",scri);
	}

	@Override
	public int getBoardCount(SearchCriteria scri) throws Exception{

		return sql.selectOne("boardMapper.getBoardCount",scri);
	}

	@Override
	public void writeBoard(BoardDTO dto) throws Exception{

		sql.insert("boardMapper.writeBoard",dto);

	}

	@Override
	public BoardDTO getBoardDetail(int bno) throws Exception{

		return sql.selectOne("boardMapper.getBoardDetail",bno);

	}

	@Override
	public void viewCntUpdate(int bno) throws Exception{

		sql.update("boardMapper.viewCntUpdate",bno);

	}

	@Override
	public void deleteBoard(int bno)throws Exception{
		sql.delete("boardMapper.deleteBoard",bno);
	}

	@Override
	public void updateBoard(BoardDTO dto)throws Exception{
		sql.update("boardMapper.updateBoard",dto);
	}

}
