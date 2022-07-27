import axios from "axios";
import "./../Page/css/Home.css";
import PropTypes from 'prop-types';
import Facelogin1 from "../Facebooklogin/TestloginFacebook";
import { React, useState, useEffect } from "react";
import Profile from './../Profilemember/Profile';
import { Outlet, Link,useNavigate  } from "react-router-dom";
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
const Layout1 = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [items, setItems] = useState([]);
  const navigateTo = useNavigate();
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  //validate เช็ค input user and pass

  //ไว้ทำ login ด้วย API set ค่าที่ได้มาจาก API JSON
  //const [Loginuser, setLoginuser] = useState("");
  //const [Loginpass, setLoginpass] = useState("");

  //เอาไว้เปรียบเทียบการ Login
  //const [namecheck, setNamecheck] = useState("");
  //const [passcheck, setPasscheck] = useState("");
  //เก็บมาจากหน้าเว็บ Login
  const CheckLogin1 = () => {
    let user1 = document.getElementById('user').value;
    let pass1 = document.getElementById('pass').value;
    console.log(user1);
    console.log(pass1);
    // create a new XMLHttpRequest
    var user11 = { id: 1, name: user1, pass: pass1 };
    console.log(user11);
    localStorage.setItem('userislog',JSON.stringify(user11));
    //การใช้ Axios ดึงข้อมูล
    axios
      .post("http://localhost:4678/user", user11, { crossdomain: true })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        if (response.data == "you can login") {
          console.log('เข้าแล้ว');
          localStorage.setItem('items', response.data);
          window.location.href = "/profile";
          
        }
        //setLoginpass(response.data.record.password.user_pass);
      });
  };
  const CheckLogin2 = () => {
    let user1 = document.getElementById('user2').value;
    let pass1 = document.getElementById('pass2').value;
    console.log(user1);
    console.log(pass1);
    // create a new XMLHttpRequest
    var user11 = { id: 1, name: user1, pass: pass1 };
    console.log(user11);
    localStorage.setItem('userislog',JSON.stringify(user11));
    //การใช้ Axios ดึงข้อมูล
    axios
      .post("http://localhost:4678/user", user11, { crossdomain: true })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        if (response.data == "you can login") {
          console.log('เข้าแล้ว');
          localStorage.setItem('items', response.data);
          window.location.href = "/profile";
          
        }
        //setLoginpass(response.data.record.password.user_pass);
      });
  };
  const [close1, setClose1] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
              <Nav.Link href="/" className="setfont active navactive1">
                หน้าแรก
              </Nav.Link>
              <Nav.Link href="/buyitem" className="setfont active navactive1">
                ซื้อของ
              </Nav.Link>
              <Nav.Link href="/contact" className="setfont active navactive1">
                ติดต่อเรา
              </Nav.Link>
              <NavDropdown
                className="setfont active navactive1"
                title="อื่นๆ"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/information" className="navactive1">
                  ข้อมูลเกียวกับกัญชา
                </NavDropdown.Item>
                <NavDropdown.Item href="/information2" className="navactive1">
                  ข้อมูลด้านกฏหมายกัญชา
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="primary" onClick={handleShow}>
              เข้าสู่ระบบ
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={true}
            >
              <Modal.Header closeButton>
                <Modal.Title>เข้าสู่ระบบ</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="d-lg-none" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>ชื่อผู้ใช้งาน</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Email & Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        id="user"
                        onChange={e => setUserName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please insert a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="Password"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        id="pass"
                        onChange={e => setPassword(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please insert a Password.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <div id="alert2" className="d-none">
                    <Alert
                      variant="danger"
                      onClose={() => setClose1(false)}
                      dismissible
                    >
                      <p>ไม่สามารถ login ได้</p>
                    </Alert>
                  </div>
                  <div className="text-center text-wrap">
                    <p>
                      ใช้อีเมลหรือบริการอื่นของคุณเพื่อใช้งาน Shop ของ ต่อ
                      (ฟรี)!
                    </p>
                  </div>
                  <div>
                    <Facelogin1 />
                    <div id="status"></div>
                  </div>
                  <div
                    className="d-flex justify-content-around"
                    style={{ float: "right" }}
                  >
                    <Button
                      variant="secondary"
                      onClick={handleClose}
                      style={{ marginRight: "10px" }}
                    >
                      ปิด
                    </Button>

                    <Button
                      type="button"
                      variant="primary"
                      onClick={CheckLogin1}
                      style={{ marginLeft: "auto" }}
                    >
                      เข้าสู่ระบบ
                    </Button>
                  </div>
                </Form>
                <Form className="d-none d-lg-block" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group
                    as={Col}
                    md="11"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>ชื่อผู้ใช้งาน จอคอม</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Email & Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        id="user2"
                        onChange={e => setUserName(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please insert a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="11"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="Password"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        id="pass2"
                        onChange={e => setPassword(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please insert a Password.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <div id="alert2" className="d-none">
                    <Alert
                      variant="danger"
                      onClose={() => setClose1(false)}
                      dismissible
                    >
                      <p>ไม่สามารถ login ได้</p>
                    </Alert>
                  </div>
                  <div className="text-center text-wrap">
                    <p>
                      ใช้อีเมลหรือบริการอื่นของคุณเพื่อใช้งาน Shop ของ ต่อ
                      (ฟรี)!
                    </p>
                  </div>
                  <div>
                    <Facelogin1 />
                    <div id="status"></div>
                  </div>
                  <div
                    className="d-flex justify-content-around"
                    style={{ float: "right" }}
                  >
                    <Button
                      variant="secondary"
                      onClick={handleClose}
                      style={{ marginRight: "10px" }}
                    >
                      ปิด
                    </Button>

                    <Button
                      type="button"
                      variant="primary"
                      onClick={CheckLogin2}
                      style={{ marginLeft: "auto" }}
                    >
                      เข้าสู่ระบบ
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout1;