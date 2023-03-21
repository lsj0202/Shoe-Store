import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Main from './components/MainPage';
import data from './data';
import Cart from './components/Cart';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/Detail';
import axios from 'axios'; //라이브러리

function App() {
  const [counter, setCounter] = useState(1);
  const [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="navBar">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="links" to='/'>홈</Link>
            <Link className="links" to='/about'>회사 정보</Link>
            <Link className="links" to='/Cart'>쇼핑 카트</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-blog"></div>
            <Main shoes={shoes}/> {/*메인 페이지 호출 */}
            <button className="btn lis" onClick={() => {
              if(counter === 1){
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                  let copy = [...shoes, ...result.data];

                  console.log(result.data);
                  setShoes(copy);
                })
                .catch((error) => console.log(error));
              } else if(counter === 2){
                axios.get('https://codingapple1.github.io/shop/data3.json')
                  .then((result) => {
                  let copy = [...shoes, ...result.data];

                  console.log(result.data);
                  setShoes(copy);
                })
                .catch((error) => console.log(error));
              } else{
                alert('더 이상의 페이지가 없습니다.');
              }
              setCounter(counter + 1);

              console.log(counter);
            }}>
             더보기
             </button><br/>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path='/about' element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

const About = () => {
  return(
    <div>
      <h4>회사 정보에 관한 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
