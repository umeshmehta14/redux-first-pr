import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/ProductSlice";

const DashBoard = () => {
  const { loading } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(loading);
  return <div>{loading ? <h1>Loading...</h1> : <Product />}</div>;
};

export default DashBoard;
