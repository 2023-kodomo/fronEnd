import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../HeaderComponent";
import StylingLobby from "../stylingLobby";
import ProductPost from "../product";
import UserInfo from "./User";
import MyPageAPI from "./../../utils/api/MyPageAPI";

const MypageComponent = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const productDatas = await MyPageAPI();
      console.log(productDatas);
      if (productDatas.myProduct.length !== 0) {
        setProducts(productDatas.myProduct);
      }
    } catch (e) {
      console.log(e);
    }
    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productBundle = (products) => {
    if (products.length !== 0) {
      const Product = products.map((e, i) => (
        <ProductPost
          title={e.title}
          price={e.price}
          image={e.image}
          key={i}
          id={e.id}
        />
      ));
      return Product;
    }
  };

  const postButtonClickHandler = () => {
    window.location.href = "/posting";
  };

  return (
    <Container>
      <Header />
      <StylingLobby>
        <UserInfo user={products} />
        <UserItem>
          <SellingItemTitle>내가 팔고 있는 물건</SellingItemTitle>
          <SellingItem>
            <ProductContainer>{productBundle(products)}</ProductContainer>
          </SellingItem>
        </UserItem>
      </StylingLobby>
      <AddPostButton onClick={postButtonClickHandler}>+</AddPostButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: auto;
`;

const UserItem = styled.div`
  width: 100%;
  min-height: 100px;
  flex-shrink: 0;
  position: relative;
  top: 496px;
  right: 200px;
`;

const SellingItemTitle = styled.div`
  color: #fff;
  font-family: "Hakgyoansim Wooju";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  left: 163px;
`;

const SellingItem = styled.div`
  margin: 0px 128px;
  position: relative;
  top: 64px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 90px;
  justify-items: center;
  @media screen and (max-width: 1700px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 64px;
    margin-right: 64px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AddPostButton = styled.button`
  position: fixed;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  right: 32px;
  bottom: 32px;
  background-color: #181738;
  border: 1px solid #7a6ccf;
  color: white;
  font-size: 54px;
  outline: none;
  transition: all 0.7s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: #181738 4px 4px 4px;
  }
`;

export default MypageComponent;
