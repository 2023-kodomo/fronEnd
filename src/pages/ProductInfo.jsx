import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";
import Comment from "../components/cmt";

const ProductInfo = () => {
  return (
    <Container>
      <Header page={0} />
      <StylingLobby></StylingLobby>
      <ContentBox>
        <BeforeButton></BeforeButton>
        <Title>학교에서 빼돌린 노트북 팝니다.</Title>
        <Date>2023.09.01</Date>
        <Writing>박지민</Writing>
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

const Container = styled.div``;

const ContentBox = styled.main``;

const BeforeButton = styled.button``;

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
