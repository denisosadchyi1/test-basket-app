import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts } from "../../redux/actions/actions";
import Product from "../Product";
import { LoadingWrapper, AllProductsWrapper, CloseButton } from "./styles";

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);
  const showProducts = useSelector((state) => state.products.showProduct);
  const loading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onClearHandler = () => {
    dispatch(clearProducts())
  }

  if (loading) {
    return (
      <LoadingWrapper>
        <h5>Loading....</h5>
      </LoadingWrapper>
    );
  } else if (!products.length || showProducts === false) {
    return (
      <div style={{ width: "500px", margin: "0 auto" }}>
        <h5 style={{ textAlign: "center" }}>
          Продукции пока нету, нажмите на кнопку чтобы загрузить товары :)
        </h5>
      </div>
    );
  }

  return (
    <AllProductsWrapper>
      <CloseButton>
        <button
          className="btn btn-danger"
          onClick={onClearHandler}
        >
          X
        </button>
      </CloseButton>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-3 mb-4" key={Date.now() + product.id}>
            <Product
              name={product.name}
              cost={product.cost}
              id={product.id}
              quantity={product.quantity}
              img={product.url}
            />
          </div>
        ))}
      </div>
    </AllProductsWrapper>
  );
};

export default AllProducts;
