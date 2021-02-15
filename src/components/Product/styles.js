import styled from 'styled-components';

export const ProductWrapper = styled.div`
  position: relative;
  color: #000;
  width: 300px;
  height: 350px;
  background: #fff;
  label {
    font-size: 17px;
  }
`;

export const ProductItemWrapper = styled.div`
  text-align: center;
  width: 170px;
  margin: 35px auto;
`;

export const PriceWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
`; 

export const ImgWrapper = styled.div`
  width: 150px;
  height: 185px;
  margin: 0 auto;
  img{
    width: 155px;
    height: 185px;
  }
`;
