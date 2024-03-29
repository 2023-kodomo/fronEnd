import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductPost = ({ title, price, image, id }) => {
  const [productPrice, setProductPrice] = useState(price);
  useEffect(() => {
    if (productPrice === 0) {
      setProductPrice("무료나눔");
    } else {
      setProductPrice(
        productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
  }, []);

  return (
    <Linker href={`/moreinfo?productId=${id}`}>
      <Container>
        <ProductImg src={image} />
        <ProductName>{title}</ProductName>
        <ProductPrice>￦ {productPrice}</ProductPrice>
      </Container>
    </Linker>
  );
};

const Linker = styled.a`
  text-decoration: none;
`;

const Container = styled.summary`
  background-color: #181738;
  box-sizing: border-box;
  border: 5px solid #7a6ccf;
  border-radius: 48px 48px 0 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding-top: 30%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.25);
`;

const ProductImg = styled.img`
  width: 140px;
  height: 140px;
  background-color: #c2c2c2;
`;

const ProductName = styled.span`
  color: #fff;
  text-align: center;

  font-family: "Hakgyoansim Wooju";
  font-size: 20px;
`;

const ProductPrice = styled.span`
  color: #fff;
  text-align: center;

  font-family: "Hakgyoansim Wooju";
  font-size: 24px;
`;

export default ProductPost;
