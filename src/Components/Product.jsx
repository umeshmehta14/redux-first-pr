import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {products?.map((product) => {
          const { title, image, price, id } = product;
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
                  <Button
                    variant="primary"
                    onClick={() => dispatch(add(product))}
                  >
                    Add to Cart
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

export default Product;
