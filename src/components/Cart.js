import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {

  let state = useSelector((state) => { return state }) //store의 모든 state가 저장됨 //state의 내용도
  console.log(state);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
        {
          state.datar.map((data, i) => 
            <tr key={i}>
              <td>{state.datar[i].id}</td>
              <td>{state.datar[i].name}</td>
              <td>{state.datar[i].count}</td>
              <td>하루</td>
            </tr>
          )
        }
      </thead>
      <tbody>
      </tbody>
    </Table>
  )
}

export default Cart;