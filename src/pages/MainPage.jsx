import React from "react";
import styled from "styled-components";
import Product from "../components/product";

const MainPage = () => {
  return (
    <Container>
      <StylingLobby>
        <SmallText>대마고 전용 중고거래 사이트</SmallText>
        <Logo>대팔이</Logo>
      </StylingLobby>
      <GrowContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </GrowContainer>
    </Container>
  );
};

const Container = styled.main``;
const StylingLobby = styled.div``;
const SmallText = styled.span``;
const Logo = styled.span``;
const GrowContainer = styled.div``;

export default MainPage;
