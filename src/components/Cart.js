import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {

  let a = useSelector((state) => { return state }) //store의 모든 state가 저장됨 //state의 내용도
  console.log(a.datar);

  const [cart, setCart] = useState(a.datar);
  let copy = [...cart];

  return (
    <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          copy.map((data, idx) => 
            <tr key={idx}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
}

export default Cart;