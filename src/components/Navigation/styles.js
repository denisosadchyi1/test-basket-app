import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  a{
    color: #fff;
    text-decoration: none;
    /* color: #000; */
    font-size: 20px;
    font-weight: 700;
  }
  a:hover{
    color: yellow;
  }
`;

export const NavigationItem = styled.nav`
  /* background-color: #e6dcdc; */
  background:  #007bff;
`;

export const Item = styled.div`
  padding: 10px 0;
  width: 100px;
`;

export const BasketItem = styled.div`
  padding: 10px 0;
  width: 120px;
  display: flex;
  justify-content: space-between;
  p{
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    margin-top: 3px;
  }
`;
