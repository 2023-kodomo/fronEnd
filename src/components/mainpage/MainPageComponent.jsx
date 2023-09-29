import React from "react";
import styled, { keyframes } from "styled-components";
import ProductPost from "../product";
import Header from "../header";

const MainPageComponent = () => {
  return (
    <Container>
      <Header page={0} />
      <StylingLobby>
        <SmallText>대마고 전용 중고거래 사이트</SmallText>
        <Logo>대팔이</Logo>
      </StylingLobby>
      <GrowContainer>
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
        <ProductPost />
      </GrowContainer>
    </Container>
  );
};

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
`;

const StylingLobby = styled.div`
  height: 830px;
  background-image: url("./wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  position: sticky;
  top: -386px;
  display: flex;
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
  left: 300px;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  right: 450px;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const GrowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: auto;
  row-gap: 90px; /* 세로 간격을 90px로 설정 */
  margin-left: 128px; /* 좌측 여백 128px */
  margin-right: 128px; /* 우측 여백 128px */
  justify-items: center;
  position: relative;
  top: -230px;
`;

export default MainPageComponent;
