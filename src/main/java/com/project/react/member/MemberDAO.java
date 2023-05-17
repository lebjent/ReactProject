package com.project.react.member;

public interface MemberDAO {
    
    public int idDupChk(String id) throws Exception;

    public void memberJoin(MemberDTO member) throws Exception;

    /* 로그인을 위한 유저정보 가져오기 */
    public MemberDTO getMemberInfo(String id)throws Exception;

}
