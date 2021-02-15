import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, addToBasket } from "../../redux/actions/actions";
import {
  ProductItemWrapper,
  ProductWrapper,
  ImgWrapper,
  PriceWrapper,
} from "./styles";

const Product = ({ name, cost, id, quantity, img }) => {

  const addBasketQuantity = () => {
    if (quantity === 0) {
      dispatch(addToBasket(id));
    } else if (quantity > 0) {
      dispatch(addQuantity(id));
    }
  };
  const dispatch = useDispatch();
  return (
    <ProductWrapper className="card mt-3">
      <div className="card-body">
        <ImgWrapper>
          <img src={img} alt="Product img" />
        </ImgWrapper>
        <ProductItemWrapper>
          <h5 className="card-title" id="name">
            {name}
          </h5>
        </ProductItemWrapper>
        <PriceWrapper>
          <h5 className="card-title" id="phone">
            ${cost}
          </h5>
        </PriceWrapper>
      </div>
      <button
        className="btn btn-success"
        onClick={addBasketQuantity}
      >
        Добавить в корзину
      </button>
    </ProductWrapper>
  );
};

export default Product;
