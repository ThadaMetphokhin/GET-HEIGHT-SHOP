import './../Page/css/Home.css';
import React from 'react';
import Layout from './../Navline/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
function Profile1() {
    const checklogin1 = localStorage.getItem('items');
  if(checklogin1 !== 'you can login'){
    return window.location.href = "/"
  }
  return (
    <>
      <div>
        <Container className="setfont">
          <div id="testlogin"></div>
          <br />
          <h1>หน้า Profile</h1>
          <div className="text-center">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2018/09/07/18/18/hemp-leaf-3661209_960_720.jpg"
            />
          </div>
          <br />
          <div className="fontcontent">
            {/*เนื้อหาเนื้อหาข่าว*/}
            <Card style={{ width: 'auto' }}>
              {/*หัวเรื่อง */}
              <h4>สังคมอุดมกัญชา ภัย! ควันกัญชามือสอง</h4>
              <img
                className="img-fluid"
                src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5nm85rZEgM7JcGUEjsdVEAcInHoENaJzmDsNB7Ygjfu3zrkmrnR.jpg"
              />
              <Card.Body>
                <Card.Text>
                    ตอกย้ำประเด็น “ภัยสุขภาพ” จาก “ควันกัญชามือสอง” รศ.นพ.ธีระ
                    วรธนารัตน์ : เฟซบุ๊กส่วนตัว “Thira Woratanarat (ป๊ามี้คีน)”
                    เคยเตือนไว้ตั้งแต่ 10 ธันวาคม 2562 (วันรัฐธรรมนูญ)
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: 'auto' }}>
              <h4>
                กัญชากับเด็ก : "ถ้ากัญชาจะเสรีขนาดนี้ อนาคตของประเทศชาติก็คงแย่"
              </h4>
              <img src="https://ichef.bbci.co.uk/news/1024/branded_thai/8E06/production/_125785363_fe30624ece45603e6a81b79908fc89a76b9fc384.jpg" />
              <Card.Body>
                <Card.Text>
                  ความเข้มข้น 1000 มก. เหมาะสำหรับการรักษาจิตใจให้สงบสุข
                  เครียดน้อยลงในชีวิตประจำวัน
                  ผลิตภัณฑ์ตัวนี้จะทำให้คุณได้รับประโยชน์จากการใช้งาน CBD
                  อย่างสม่ำเสมอ
                  คุณมีโอกาสเห็นผลในร่างกายและจิตใจเมื่อใช้ไปสักระยะหนึ่ง
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}
export default Profile1;
