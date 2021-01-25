import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addBasketQuantity, addQuantity, subBasketQuantity } from "../../redux/actions/actions";

const BasketProductWrapper = styled.div`
  width: 420px;
`;

const AmountWrapper = styled.div`
  width: 130px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  h5{
    margin-top: 5px;
    font-weight: 700;
    font-size: 22px;
  }
`;

const BasketProduct = ({name, cost, quantity, id}) => {
  const Quantity= useSelector(state => state.products.basketProducts)
  let test_quantity = 0
  Quantity.map(product => {
    if (product.id === id) {
      test_quantity = test_quantity + product.quantity
    }
  })
  const dispatch = useDispatch()
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
          <div className="col">
            <AmountWrapper>
              <div>
                <button 
                  className="btn btn-danger"
                  onClick={() => dispatch(subBasketQuantity(id))}>-</button>
              </div>
              <div>
                <h5 className="card-title" id="phone">
                  {test_quantity}
                </h5>
                </div>
                <div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => dispatch(addQuantity(id))}>+</button>
              </div>
            </AmountWrapper>
          </div>
        </div>
      </div>
    </BasketProductWrapper>
  );
};

export default BasketProduct;
