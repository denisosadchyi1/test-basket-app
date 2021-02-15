import styled from 'styled-components';

export const BasketProductWrapper = styled.div`
  width: 550px;
  height: 150px;
`;

export const CardWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const AmountWrapper = styled.div`
  width: 130px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  h5 {
    margin-top: 5px;
    font-weight: 700;
    font-size: 22px;
  }
`;

export const ProductNameWrapper = styled.div`
  width: 190px;
  margin-top: 30px;
  margin-left: 10px;
  h5{
    font-size: 20px;
  }
`;

export const ProductPrice = styled.div`
  width: 170px;
  margin-top: 20px;
`;

export const ImgWrapper = styled.div`
  width: 170px;
  height: 100px;
  margin: 0 auto;
  img {
    width: 90px;
    height: 110px;
  }
`;
