package com.project.react.memo;
import java.util.List;

public interface MemoService {
    
    /* 메모 작성 */
    public void insertMemo(MemoDTO dto) throws Exception;

    /* 메모 리스트 */
    public List<MemoDTO> getMemoList()throws Exception;

    /* 메모 삭제 */
    public void memoDelete(MemoDTO dto)throws Exception;

}
