/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Main from './components/MainPage';
import data from './data';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/Detail';
import axios from 'axios'; //라이브러리

function App() {

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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-blog"></div>
            <Main shoes={shoes}/>
            <button className="btn" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                 let copy = [...shoes, ...result.data];

                 console.log(result.data); 
                 setShoes(copy);
                })
              .catch((error) => console.log(error));
              console.log(shoes);
            }}>더보기..</button>
            <button className="btn" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((list) => {
                let copy = [...shoes, ...list.data];

                console.log(copy);
                setShoes(copy);
              })
              .catch((error) => console.log(error));
            }}>더 많은 정보를 원해요!</button>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>

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
      <h4>회사의 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
