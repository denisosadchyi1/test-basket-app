import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const NavigationWrapper = styled.div`
  a{
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
  a:hover{
    color: grey;
  }
`;

const NavigationItem = styled.nav`
  background-color: #e6dcdc;
`;

const Item = styled.div`
  padding: 10px 0;
  width: 100px;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItem className="navbar navbar-expand-lg navbar-light">
        <div className="container-md">
          <Item>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/basket">
            <FontAwesomeIcon icon={faShoppingBasket} />
            </NavLink>
          </Item>
        </div>
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default Navigation;
