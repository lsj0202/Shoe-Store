/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Main from './components/MainPage';
import data from './data';
import { Routes, Route, Link , useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/Detail';

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
