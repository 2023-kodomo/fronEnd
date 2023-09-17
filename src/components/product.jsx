import React from "react";
import styled from "styled-components";

const ProductPost = ({ Product }) => {
  let name = "코로나 팔아요";
  let productImg;
  let price = "₩ 19,000";
  if (Product !== undefined) {
    name = Product.title;
    productImg = Product.image;
    price = Product.price;
  }
  return (
    <Container>
      <ProductImg src="productImg" />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </Container>
  );
};

const Container = styled.summary`
  background-color: #181738;
  box-sizing: border-box;
  border: 5px solid #7a6ccf;
  border-radius: 48px 48px 0 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding-top: 60px;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
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

  /* 20pt 학교안심 우주 */
  font-family: "Hakgyoansim Wooju";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProductPrice = styled.span`
  color: #fff;
  text-align: center;

  /* 24pt 학교안심 우주 */
  font-family: "Hakgyoansim Wooju";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default ProductPost;
