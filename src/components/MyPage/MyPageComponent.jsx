import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../HeaderComponent";
import StylingLobby from "../stylingLobby";
import ProductPost from "../product";
import UserInfo from "./User";
import MyProduct from "./../../utils/api/MyProduct";

const MypageComponent = () => {
  
  const product = {
    id: "사용자 아이디",
    name: "사용자 이름",
    email: "사용자 이메일",
    products: [
      {
        title: "코로나를 팝니다",
        content: "상품 설명",
        price: "19690",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "리액트 팝니다",
        content: "상품 설명",
        price: "무료나눔",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "일렉트론 팝니다",
        content: "상품 설명",
        price: "1000",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "박지민 팝니다",
        content: "상품 설명",
        price: "무료나눔",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "숲속의 박지민 공주",
        content: "상품 설명",
        price: "100,000,000,000",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "커여운 띠모 핍니다.",
        content: "상품 설명",
        price: "9,999,999,999,999",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "김희찬 팝니다.",
        content: "상품 설명",
        price: "999,999,999,999",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "남궁윤교 처리해요.",
        content: "상품 설명",
        price: "-100000",
        image: "",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
      {
        title: "조유리 급처해요",
        content: "도저히 갖고 못있겠어요",
        price: "-999,999,999,999",
        image: "./img/Yuri.svg",
        uploadDate: "2023-00-00T00:00:00.000+00:00",
      },
    ],
  };

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const productDatas = await MyProduct();
      setProducts(productDatas);
    } catch (e) {
      console.log(e);
    }
    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productBundle = (products) => {
    const Product = products.map((e, i) => (
      <ProductPost
        title={e.products.title}
        price={e.products.price}
        image={e.products.image}
        key={i}
        id={e.id}
      />
    ));
    return Product;
  };

  return (
    <Container>
      <Header />
      <StylingLobby>
        <UserInfo user={products} />
        <UserItem>
          <SellingItemTitle>내가 팔고 있는 물건</SellingItemTitle>
          <SellingItem>
            <ProductContainer>
              {productBundle(products)}
            </ProductContainer>
          </SellingItem>
        </UserItem>
      </StylingLobby>
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

export default MypageComponent;
