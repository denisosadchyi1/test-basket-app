import React from "react";
import styled from "styled-components";

const BasketFormWrapper = styled.form`
  /* width: 300px; */
  div{
    margin: 15px 0;
  }
`;

const BasketForm = () => {
  return (
    <BasketFormWrapper method="POST" className="col g-3">
      <div className="row">
        <label htmlFor="staticEmail2" className="visually-hidden">
          Email
        </label>
        <input
          type="text"
          readonly
          className="form-control"
          id="staticEmail2"
          value="email@example.com"
        />
      </div>
      <div className="row">
        <label htmlFor="inputPassword2" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Password"
        />
      </div>
      <div className="row">
        <button 
          type="submit" 
          className="btn btn-primary mb-3">
          Оформить заказ
        </button>
      </div>
    </BasketFormWrapper>
  );
};

export default BasketForm;
