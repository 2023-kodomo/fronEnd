import React from "react";
import { styled } from "styled-components";
import Header from "../components/header";

const PostingPage = () => {
  return (
    <>
      <Container>
        <Header />
        <StylingLobby></StylingLobby>
        <PostingFrame>
          <ImgBox>
            <span>물품 사진 ※ 사진은 한 장만 넣을 수 있습니다</span>
            <PostingImg />
            <ImgDelete></ImgDelete>
            <ImgInsert></ImgInsert>
          </ImgBox>
          <PostingForm>
            <ul>
              <li>
                <ProductLabel></ProductLabel>
                <ProductName></ProductName>
              </li>
              <li>
                <ProductLabel></ProductLabel>
                <ProductExplain></ProductExplain>
              </li>
              <li>
                <ProductLabel></ProductLabel>
                <ProductPrice></ProductPrice>
              </li>
              <li>
                <ProductLabel></ProductLabel>
                <TransactionAppointmentTime></TransactionAppointmentTime>
              </li>
              <li>
                <ProductLabel></ProductLabel>
                <TradingPlace></TradingPlace>
              </li>
            </ul>
            <PostingCancel></PostingCancel>
            <PostingConfirm></PostingConfirm>
          </PostingForm>
        </PostingFrame>
      </Container>
    </>
  );
};

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

const PostingFrame = styled.div``;

const ImgBox = styled.div``;

const PostingImg = styled.img``;

const ImgInsert = styled.button``;

const ImgDelete = styled.button``;

const PostingForm = styled.form``;

const ProductLabel = styled.label``;

const ProductName = styled.input``;

const ProductExplain = styled.textarea``;

const ProductPrice = styled.input``;

const TransactionAppointmentTime = styled.input``;

const TradingPlace = styled.input``;

const PostingCancel = styled.button``;

const PostingConfirm = styled.button``;

export default PostingPage;
