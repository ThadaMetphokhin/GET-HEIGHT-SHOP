import axios from "axios";
import "./css/menuinmobile.css"
import "./../Page/css/Home.css";
import Facelogin1 from "../Facebooklogin/TestloginFacebook";
import { React, useState, useEffect } from "react";
import Profile from './../Profilemember/Profile';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Button,
  Modal,
  Form,
  Alert,
  InputGroup,
  Col,
} from "react-bootstrap";
const Layout = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [validated, setValidated] = useState(false);
  const [close1, setClose1] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  //เก็บมาจากหน้าเว็บ Login
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  // create a new XMLHttpRequest
  const user111 = localStorage.getItem('userislog');
  const setjson1 = JSON.parse(user111);

  const getprofile = () => {

    axios
      .post("http://localhost:4678/member/profile", setjson1, { crossdomain: true })
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.name);
        console.log(response.data.srcimg1);
        setName(response.data.name);
        setImg(response.data.srcimg1);
        //setLoginpass(response.data.record.password.user_pass);
      });
  }
  //การใช้ Axios ดึงข้อมูล
  if (user111 !== '') {
    getprofile();
  }




  //ฟังก์ชัน logout
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/"
  }

  //ฟงัก์ชัน menu dropdown in mobile
  /* เมื่อผู้ใช้กดปุ่ม, toggle between hiding and showing the dropdown content */
  const dropmanu = () =>{
      console.log('hi');
      document.getElementById("myDropdown").classList.toggle("show");
  }
    // ปิด dropdown ถ้า user กด click ข้างนอก
    window.addEventListener("click", function(event) {
      if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll(".dropdown-content.show")
          .forEach(openDropdown => openDropdown.classList.remove('show'))
      }
    });
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/profile">
            <img
              alt="iconbrand"
              src="https://cdn-icons-png.flaticon.com/512/7550/7550755.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            GET HEIGHT
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/profile" className="setfont active navactive1">
                หน้าแรก
              </Nav.Link>
              <Nav.Link href="/profile/buyitem" className="setfont active navactive1">
                ซื้อของ
              </Nav.Link>
              <Nav.Link href="/profile/contact" className="setfont active navactive1">
                ติดต่อเรา
              </Nav.Link>
              <NavDropdown
                className="setfont active navactive1"
                title="อื่นๆ"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/profile/information" className="navactive1">
                  ข้อมูลเกียวกับกัญชา
                </NavDropdown.Item>
                <NavDropdown.Item href="/profile/information2" className="navactive1">
                  ข้อมูลด้านกฏหมายกัญชา
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-none d-lg-block ">
              <div className="dropdown">
                <input id="drop" width="60" type='image' src={img} className="img-fluid imgcircle dropbtn" onClick={dropmanu}/>
                <div id="myDropdown" className="dropdown-content" style={{backgroudColor:'red'}}>
                  <div style={{padding:'20px'}}>

                    <img width='50px' height='50px' src={img} className="img-fluid" />
                    <hr style={{background: 'black',height: '3px'}}/>
                    <p>ยินต้อนรับ</p>
                    <p>คุณ {name}</p>
                    <hr style={{background: 'black',height: '3px'}}/>
                    <Button variant='danger' type="button" onClick={logout}>ออกจากระบบ</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none">
              
              <div className="text-center d-flex justify-content-evenly border">
                <div>
                  <br/>
                  <img width='50px' height='50px' src={img} className="img-fluid" />
                </div>
                <div>
                  <br/>
                  <p>ยินต้อนรับ</p>
                  <p>คุณ {name}</p>
                </div>
                <div>
                  <br/>
                  <Button variant='danger' type="button" onClick={logout}>ออกจากระบบ</Button>
                </div>
              </div>
            </div>


          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;