import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <>
      <h1>Cart</h1>
      <div className="row">
        {cart?.map(({ title, image, price, id }) => {
          return (
            <div className="col-md-3">
              <Card key={id} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={image}
                  style={{ width: "200px", height: "200px", margin: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="danger" onClick={() => dispatch(remove(id))}>
                    Remove from Cart
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
