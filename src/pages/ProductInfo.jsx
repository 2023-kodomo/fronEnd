import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";
import Comment from "../components/comment";

const ProductInfo = () => {
  return (
    <Container>
      <Header page={0} />
      <StylingLobby></StylingLobby>
      <ContentBox>
        <BeforeButton>
          <img src="./img/Arrow1.svg" />
        </BeforeButton>
        <TextGroup>
          <Title>학교에서 빼돌린 노트북 팝니다.</Title>
          <Date>2023.09.01</Date>
          <Writing>박지민</Writing>
        </TextGroup>
        <Line></Line>
        <ProductImg />
        <ProductInfoContainer>
          <ProductExplan>노트북 오백원에 팝니다.</ProductExplan>
          <ProductCategory>카테고리 : 전자기기</ProductCategory>
          <TradingPlace>거래 장소 : 코도모 동아리실</TradingPlace>
        </ProductInfoContainer>
        <AddCommentContainer>
          <span>댓글 작성</span>
          <WriteButton>작성</WriteButton>
          <CommentTextArea placeholder="댓글 내용을 입력해주세요"></CommentTextArea>
        </AddCommentContainer>
        <Comment />
      </ContentBox>
    </Container>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  padding-top: 46px;
  width: 1000px;
  min-height: 720px;
  position: fixed;
  top: 150px;
  margin: 0px 460px;
  background: #181738;
  box-shadow: 0px 0px 25px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const BeforeButton = styled.button`
  background-color: #9a8cf2;
  border-radius: 27px;
  width: 38px;
  height: 38px;
  border: none;
  box-shadow: none;
  overflow: visible;
  box-shadow: 0px 0px 6px;
  position: absolute;
  top: 8px;
  left: 8px;
  &:hover {
    animation: ${rotate} 1s;
  }
`;

const TextGroup = styled.div`
  color: white;
`;

const Title = styled.span``;

const Date = styled.span``;

const Writing = styled.span``;

const Line = styled.div``;

const ProductImg = styled.image``;

const ProductInfoContainer = styled.div``;

const ProductExplan = styled.span``;

const ProductCategory = styled.span``;

const TradingPlace = styled.span``;

const AddCommentContainer = styled.div``;

const WriteButton = styled.button``;

const CommentTextArea = styled.textarea``;

export default ProductInfo;
