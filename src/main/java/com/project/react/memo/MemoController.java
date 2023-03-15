package com.project.react.memo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class MemoController {
    
    @Autowired
    private MemoService service;

    @PostMapping(value="/react/insertMemo")
    public ResponseEntity<String> insertMemo(@RequestBody MemoDTO dto) {
        try {
            service.insertMemo(dto);
            return ResponseEntity.ok().body("메모가 등록되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("메모 등록에 실패했습니다.");
        }
    }
    
    @GetMapping(value = "/react/getMemoList")
    public List<MemoDTO>getMemoList()throws Exception{
        
        List<MemoDTO> resultList = new ArrayList<>();

        try {
            resultList = service.getMemoList();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return resultList;
    }

    @PostMapping(value = "/react/memoDelete")
    public ResponseEntity<String> memoDelete(@RequestBody MemoDTO dto) throws Exception{

        try{
            service.memoDelete(dto);
            return ResponseEntity.ok().body("메모가 정상적으로 삭제되었습니다.");
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("메모 삭제에 실패했습니다.");
        }

    }

}
