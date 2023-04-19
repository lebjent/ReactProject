import React, { useState } from 'react';
import BasicButton from '../ui/BasicButton';
import "../css/common.css";

function Payment() {
  const IMP = window.IMP;
  IMP.init('imp66804337');

  const [pg, setPg] = useState('html5_inicis');

  const onChangePg = (event) => {
    setPg(event.target.value);
  };

  const requestPay = () => {
    console.log(pg);
    IMP.request_pay(
      {
        pg: pg,
        pay_method: 'card',
        merchant_uid: 'ORD20180131-0000011',
        name: '노르웨이 회전 의자',
        amount: 64900,
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      (rsp) => {
        if (rsp.success) {
          // 결제 성공 시 로직
        } else {
          // 결제 실패 시 로직
        }
      }
    );
  };

  return (
    <div>
      <h2>포트원 결제요청페이지</h2>
      <div className='mb20'>
        <select value={pg} onChange={onChangePg}>
            <option value="html5_inicis">이니시스웹표준</option>
            <option value="kcp">KCP</option>
        </select>
      </div>
      <BasicButton value={'결제하기'} bgColor={'primary'} onClick={requestPay} />
    </div>
  );
}

export default Payment;