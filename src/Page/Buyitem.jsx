import './css/Home.css';
import './css/Notifibuyitem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './../Cartsystem/Cartshop1';
import { React, useEffect, useState } from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import { Button, Card, Container, Badge } from 'react-bootstrap';
import axios from 'axios';

function Page() {
  const { addItem } = useCart();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://fakestoreapi.com/products`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setProduct(...[response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Container className="setfont">
        <Container>
          <p>หน้าสำหรับขาย</p>
          {/*แสดงในหน้าจอขนาดเล็ก*/}
          <div className="d-lg-none">
            <div style={{ float: 'right' }}>
              <Cart />
            </div>
          </div>
          {/*แสดงในหน้าจอขนาดใหญ่*/}
          <div className="d-none d-lg-block ">
            <div style={{ float: 'right' }}>
              <Cart />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Container className="row">
              {products.map((p) => (
                <div
                  className="col auto"
                  key={p.id}
                  style={{ marginTop: '10px' }}
                >
                  <Card
                    style={{ width: '9rem' }}
                    className="cardshadow imgfade"
                  >
                    <p style={{ padding: '10px' }}>{p.category}</p>
                    <Card.Img
                      variant="top"
                      src={p.image}
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Button
                        variant="success"
                        style={{ float: 'right' }}
                        data-value="1"
                        onClick={() => addItem(p)}
                      >
                        ADD
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Container>
          </div>
        </Container>
      </Container>
    </>
  );
}
const Carttest = () => {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
};
export default Carttest;
