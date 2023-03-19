import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage(props) {
  let navigate = useNavigate();

  return (
    <Container className>
      <Row>
        {
          props.shoes.map((a, i) => {
            return(
              <Col key={i}>
                <img src={'https://codingapple1.github.io/shop/shoes' + (i+1) + '.jpg'} width="80%" alt=""/>
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].price}</p>
                <button className='btn' onClick={() => { navigate(`/detail/${i}`) }}>상세정보</button>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default MainPage;
