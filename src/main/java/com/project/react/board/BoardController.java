package com.project.react.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/react")
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	@GetMapping(value = "/getBoardList")
	public List<BoardDTO> getBoardList()throws Exception{
		
		List<BoardDTO> boardList = new ArrayList<>();
		
		try {
			boardList = service.getBoardList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return boardList;
		
	}
	
	@PostMapping("/writeBoard")
    public ResponseEntity<String> writeBoard(@RequestBody BoardDTO boardDTO) {
        try {
            service.writeBoard(boardDTO);
            return ResponseEntity.ok().body("게시글이 등록되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시글 등록에 실패했습니다.");
        }
    }
}
