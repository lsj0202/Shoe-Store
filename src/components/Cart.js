import React, { useState, memo, useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const Child = memo (function(){
  console.log('Child');
  return <div>자식임</div>
}); // 꼭 필요할때 재 렌더링 해주세요

const 함수 = () => {
  return <div>반복문 10억번</div>
}
function Cart() {

  let result = useMemo(() => {return 함수}, []);
  let state = useSelector((state) => { return state }) //store의 모든 state가 저장됨 //state의 내용도
  console.log(state);
  const [count, setCount] = useState(0);

  return (
    <Table striped>
      <Child count={count}></Child>
      <button onClick={() => { setCount(count + 1) }}>+</button>
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