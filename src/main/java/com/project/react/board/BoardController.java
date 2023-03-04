package com.project.react.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	@GetMapping(value = "/react/getBoardList")
	public List<BoardDTO> getBoardList()throws Exception{
		
		List<BoardDTO> boardList = new ArrayList<>();
		
		try {
			boardList = service.getBoardList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return boardList;
		
	}
	
}
