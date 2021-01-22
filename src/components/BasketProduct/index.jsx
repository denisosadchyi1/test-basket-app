import React from "react";
import styled from "styled-components";

const BasketProductWrapper = styled.div`
  width: 400px;
`;

const BasketProduct = ({name, cost}) => {
  return (
    <BasketProductWrapper className="card mt-3">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <label htmlFor="name">Найменование</label>
            <h5 className="card-title" id="name">
              {name}
            </h5>
          </div>
          <div className="col">
            <label htmlFor="phone">Цена</label>
            <h5 className="card-title" id="phone">
              {cost}
            </h5>
          </div>
        </div>
      </div>
    </BasketProductWrapper>
  );
};

export default BasketProduct;
