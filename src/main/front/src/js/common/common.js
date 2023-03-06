/*
  작 성 자 : 전 준 표
  작 성 일 : 2022-12-08
  작 성 내 용 : 현재 날짜 기준으로 몇일전-몇달전-몇년전 필요한 날짜 YYYY-MM-DD로 구하기
  사 용 법  : type ('D' : 일자 기준/'M' : 달 기준/'Y' : 년 기준)
          number(몇일/달/년 을 계산해줄 매개변수 ex) -1,+1 )
          예시) 하루전 todayConvertDate('D',-1);
          예시) 한달전 todayConvertDate('M',-1);
          예시) 일년전 todayConvertDate('Y',-1);
*/
export function todayConvertDate(type,number){
      
    let date = new Date();
    if(type === 'D'){
      date = new Date(date.setDate(date.getDate() + number));
    }else if(type === 'M'){
      date = new Date(date.setMonth(date.getMonth()+number));
    }else if(type === 'Y'){
      date = new Date(date.setFullYear(date.getFullYear()+number));
    }
    
    let year  = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
      
    return year + "-" + month + "-" + day;
    
}