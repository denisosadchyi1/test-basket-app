import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  color: #000;
  width: 300px;
  height: 150px;
  background: #fff;
  label {
    font-size: 17px;
  }
`;

const Product = ({ name, cost }) => {
  return (
    <ProductWrapper className="card mt-3">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <label htmlFor="name">Найменование</label>
            <label htmlFor="phone">Цена</label>
          </div>
          <div className="col">
            <h5 className="card-title" id="name">
              {name}
            </h5>
            <h5 className="card-title" id="phone">
              {cost}
            </h5>
          </div>
        </div>
      </div>
      <button className="btn btn-success">Добавить в корзину</button>
    </ProductWrapper>
  );
};

export default Product;
