import './css/Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import { Modal, Button, Table, Badge, Alert } from 'react-bootstrap';

function Cart() {
  const [hidden1, setHidden] = useState(false);
  const [show, setShow] = useState(false);
  const ConfirmBuy = () => {
    if (hidden1) {
      return (
        <Alert variant="danger" onClose={() => setHidden(false)} dismissible>
          <Alert.Heading>Oh!! ไม่สามารถสั่งซื้อสินค้าได้</Alert.Heading>
          <p>กรูณาทำการ Login ก่อนกดยืนยันการสั่งซื้อ</p>
        </Alert>
      );
    }
    setInterval(() => {
      setHidden(false);
    }, 8000);
  };
  var a2 = 0;
  var a3 = '';
  var setquanlity = '';
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const {
    emptyCart,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p style={{position:'absolute',marginLeft:'-12px'}}>เลือกของไว้เติมเชื้อเพลิงกัญ</p>;
  console.log(items);
  items.forEach((totalprice) => {
    a3 = parseInt(totalprice.price);
    setquanlity = parseInt(totalprice.quantity);
    console.log(setquanlity);
    a2 = a3 + a2;
    a3 = a2 * setquanlity;
    console.log(typeof a2);
    console.log(a3);
    console.log(totalprice.price);
  });
  return (
    <>
      <div className="alertnotifi" variant="primary" onClick={handleShow}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/891/891407.png"
          width="30"
          height="30"
        />
        <div className="d-lg-none fixed notificationmobile">
          <Badge bg="danger">{totalUniqueItems}</Badge>
        </div>
        <div className="d-none d-lg-block fixed notificationlarger">
          <Badge bg="danger">{totalUniqueItems}</Badge>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="setfont">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">ตะกร้ากัญ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table
            className="text-center"
            id="myTable"
            striped
            bordered
            hover
            responsive="sm"
          >
            <thead>
              <tr>
                <th colSpan={10}>รายการสินค้า</th>
                <th colSpan={1}>จำนวน</th>
                <th>ราคา</th>
                <th colSpan={2}>
                  <span>จัดการสินค้า</span>
                  <Button
                    style={{ margin: 'auto', marginLeft: '4px' }}
                    onClick={emptyCart}
                  >
                    ล้างตะกร้า
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <th colSpan={10}>{item.title}</th>
                  <th colSpan={1}>{item.quantity}</th>
                  <th>{item.price}</th>
                  <th>
                    {item.quantity} x {item.name}
                  </th>
                  <th>
                    <Button
                      style={{ margin: '5px' }}
                      size="sm"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Button
                      style={{ margin: '5px' }}
                      size="sm"
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      &times;
                    </Button>
                  </th>
                </tr>
              ))}

              <tr>
                <td colSpan={4}>รวมราคาสินค้า</td>
                <td colSpan={4}>{a3} บาท</td>
              </tr>
            </tbody>
          </Table>
          <ConfirmBuy />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            ปิด
          </Button>
          <Button variant="success" onClick={() => setHidden(true)}>
            สั่งซื้อ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
