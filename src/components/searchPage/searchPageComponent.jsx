import Header from "../HeaderComponent";
import StylingLobby from "../stylingLobby";
import { styled, keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import searchProduct from "../../utils/api/searchProducts";
import ProductPost from "../product";

const SearchPageComponent = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { search } = useLocation();
  const param = new URLSearchParams(search);
  const searchTerm = param.get("word");

  console.log(searchTerm);

  const fetchProducts = useCallback(async () => {
    setProducts(await searchProduct(searchTerm));
  }, [searchTerm]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const productSet = (products) => {
    return products.map((e, i) => {
      return (
        <ProductPost
          title={e.title}
          price={e.price}
          image={e.image}
          key={i}
          id={e.id}
        />
      );
    });
  };

  return (
    <Container>
      <Header page={0} />
      <StylingLobby>
        <SmallText>대마고 전용 중고거래 사이트</SmallText>
        <Logo>대팔이</Logo>
      </StylingLobby>
      <ErrorContainer>{error}</ErrorContainer>
      <ContentBox>
        <SearchResult>{`${searchTerm}에 대한 검색 결과 ${products.length}건`}</SearchResult>

        <GrowContainer>{productSet(products)}</GrowContainer>
      </ContentBox>
    </Container>
  );
};

export default SearchPageComponent;

const fadeIn = keyframes`
    0% {
        transform: translateX(-64px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorContainer = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 32px;
  color: white;
`;

const SmallText = styled.span`
  color: white;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  animation: ${fadeIn} 2s;
  position: absolute;
  top: 308px;
  left: 15.6vw;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1700px) {
    font-size: 57.6px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 51.2px;
  }

  @media screen and (max-width: 1350px) {
    font-size: 38.4px;
  }

  @media screen and (max-height: 850px) {
    display: none;
  }
`;

const Logo = styled.span`
  color: #fff;
  text-align: center;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  animation: ${fadeIn} 2s;
  position: absolute;
  top: 276px;
  right: 23.4vw;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1700px) {
    font-size: 115.2px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 102.4px;
  }

  @media screen and (max-width: 1350px) {
    font-size: 76.8px;
  }

  @media screen and (max-height: 850px) {
    display: none;
  }
`;

const GrowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  justify-content: space-between;
  row-gap: 90px; /* 세로 간격을 90px로 설정 */
  justify-items: center;
  position: relative;

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

const SearchResult = styled.div`
  position: relative;
  color: white;
  font-family: "Hakgyoansim Wooju";
  font-size: large;
  margin-left: calc((100% - 200 * 6px) / 6 / 2);
`;

const ContentBox = styled.div`
  position: relative;
  top: -260px;
  margin-left: 128px;
  margin-right: 128px;
  width: calc(100% - 128 * 2px);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
