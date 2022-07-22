import axios from 'axios';
import './../Page/css/Home.css';
import Facelogin1 from '../Facebooklogin/TestloginFacebook'
import { React, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
const Layout = () => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log('xml')
      console.log(req.responseText);
    }
  };

  req.open("GET", "https://api.jsonbin.io/v3/b/62d9cf09248d43754ffec2bf",true);
  req.setRequestHeader("X-Master-Key", "$2b$10$uMb406zj4UrhYIAajb6i7.fN0G6VfWJ3QkrDhK37ejkF73ijIf.YS");
  req.send();
  //ไว้ทำ login ด้วย API
  const [Loginuser, setLoginuser] = useState('');
  const [Loginpass, setLoginpass] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
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
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>อีเมลผู้ใช้งาน</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="text-center text-wrap">
                    <p>
                      ใช้อีเมลหรือบริการอื่นของคุณเพื่อใช้งาน Shop ของ ต่อ
                      (ฟรี)!
                    </p>
                  </div>
                  <div>
                    <Facelogin1 />
                    <div id="status">
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  ปิด
                </Button>
                <Button variant="primary">เข้าสู่ระบบ</Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
