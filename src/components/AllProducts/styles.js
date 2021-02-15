import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
`;

export const AllProductsWrapper = styled.div`
  padding: 20px 0;
  position: relative;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;
  button{
    padding: 4px 11px;
    border-radius: 100%;
    font-weight: bold;
  }
`;