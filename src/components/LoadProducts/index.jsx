import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsData } from "../../redux/operations/operations";
import { LoadProductsButton, LoadProductsWrapper } from "./styles";

const LoadProducts = () => {
  const status = useSelector((state) => state.app.status);
  const dispatch = useDispatch();
  const loadProductsHandler = () => {
    dispatch(loadProductsData(status));
  };
  return (
    <LoadProductsWrapper>
      <LoadProductsButton
        className="btn btn-primary"
        onClick={loadProductsHandler}
      >
        Load Products
      </LoadProductsButton>
    </LoadProductsWrapper>
  );
};

export default LoadProducts;
