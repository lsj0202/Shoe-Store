/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react';

function Detail(props) {
  const [alertone, setAlertone] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    if(isNaN(content) == true){
      alert("숫자만 입력하세요");
    }
  }, [content])

  useEffect(() => {
    setTimeout(() => { setAlertone(false) }, 1000)
  }, []);

  let navigate = useNavigate();
  
  let {id} = useParams();

  return (
    <div className="container">
      {
        alertone == true && <div className='alert alert-warning'>1초이내 구매시 할인</div>
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'} width="100%"/>
        </div>

        <div className="col-md-6 mt-4">
          <div>
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
          </div>

          <input type="text" onChange={(e) => {
            setContent(e.target.value);
          }}/>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => { navigate(-1)}}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;