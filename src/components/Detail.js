/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../App.css';

function Detail(props) {
  const [alertone, setAlertone] = useState(true);
  const [content, setContent] = useState('');
  const [aler, setAler] = useState(false);
  const [tab, setTab] = useState(0);
  

  useEffect(() => {
    if(isNaN(content) == true){
      alert("숫자만 입력하세요");
    }
  }, [content])

  useEffect(() => {
    setTimeout(() => { setAlertone(false) }, 10000)
  }, []);

  const [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 1)
    return() => {
      setFade('');
    }
  },[tab]) // tab이 움직일 때마다 실행하는 useEffect

  const [fade2, setFade2] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade2('end');
    })
    return () => {
      setFade2('');
    }
  }, [])
  
  let navigate = useNavigate();
  
  let {id} = useParams();

  return (
    <div className={`container start ${fade2}`}>
      {
        alertone == true && <div className='alert alert-warning'>질 좋은 신발을 판매합니다.</div>
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'} width="100%" alt="신발"/>
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

      <Nav variant="tabs" defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>content 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#link1" onClick={() => {setTab(1)}}>content 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#link2" onClick={() => {setTab(2)}}>content 3</Nav.Link>
        </Nav.Item>
      </Nav>

      {
        tab == 0 && <div className={`navB start ${fade}`}> 
          <p>원래 이름은 "Van Doren Rubber Company"로, <br/>미국 동부의 스니커즈 사업가인 폴 반 도런이
             설립하였으며 <br/>1966년 3월 16일 캘리포니아 남부 애너하임 이스트 브로드웨이 704번지에서 첫 VANS Shoe Store를
             개장하면서<br/> 글로벌 브랜드로서의 그 초석을 다졌다.</p> 
          </div>
      }
      {
        tab == 1 && <div className={`navB start ${fade}`}>
           <p>코르테즈는 나이키의 공동창립자 이자 육상코치 출신인<br/> 빌 바우먼이<br/>
              만든 첫 번째 걸작이다.<br/> 
              그 당시 코르테즈는 그 어떤 신발보다도 가볍고 방수 기능이 우수한 기능성 신발이었다.
          </p>
          </div>
      }
      {
        tab == 2 && <div className={`navB start ${fade}`}>
          <p>
          컨버스는 2008년 탄생 100년을 맞이한 스포츠웨어 브랜드이다. <br/>브랜드명은 초창기 설립자인 마르키스 컨버스의 아명에서 본따왔으
          며<br/> 매사츄세츠에 본사를 설립하였다.<br/> 초창기에는 풋웨어와 테니스웨어를 생산하였으며 세계 최초로 기능성 농구화를 생산하였다.
          </p>
        </div>
      }
    </div>
  )
}

export default Detail;