package com.project.react.board;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@PostMapping(value = "/writeBoard")
    public ResponseEntity<String> writeBoard(@RequestBody BoardDTO boardDTO) {
        try {
            service.writeBoard(boardDTO);
            return ResponseEntity.ok().body("게시글이 등록되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시글 등록에 실패했습니다.");
        }
    }

	@GetMapping(value = "/getBoardDetail/{bno}")
	public BoardDTO getBoardDetail(@PathVariable int bno) {

		BoardDTO dto = new BoardDTO();
		try{
			dto = service.getBoardDetail(bno);
		}catch(Exception e){
			e.printStackTrace();
		}

        return dto;
    }

	@PostMapping(value = "/deleteBoard")
    public ResponseEntity<String> deleteBoard(@RequestBody Map<String, Object> data) {
        
		int bno = Integer.parseInt(data.get("bno").toString());

		try {
            service.deleteBoard(bno);
            return ResponseEntity.ok().body("게시글이 삭제되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시글 삭제에 실패했습니다.");
        }
    }

	@PostMapping(value="/updateBoard")
	public ResponseEntity<String> updateBoard(@RequestBody BoardDTO dto) {
		
		try{
			service.updateBoard(dto);
			return ResponseEntity.ok().body("게시글이 수정되었습니다.");
		}catch(Exception e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시글 수정에 실패했습니다.");
		}

	}
}
