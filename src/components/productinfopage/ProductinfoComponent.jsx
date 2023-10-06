import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../header";
import StylingLobby from "../stylingLobby";
import Comment from "./comment";

const ProductInfoComponent = () => {
  const container = useRef();
  const content = useRef();
  return (
    <Container ref={container}>
      <Header page={0} />
      <ContentBox ref={content}>
        <a href={"/"}>
          <BeforeButton>
            <img src="./img/Arrow1.svg" alt="" />
          </BeforeButton>
        </a>

        <TextGroup>
          <Title>일이삼사오육칠팔구십일이삼사오육칠팔구십</Title>
          <Date>2023.09.01</Date>
          <Writing>박지민</Writing>
        </TextGroup>
        <Line></Line>
        <ProductImg src="./img/img.png" alt="상품 사진" />
        <ProductInfoContainer>
          <ProductExplan>
            노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백원에팝니다.노트북오백
          </ProductExplan>
          <ProductCategory>카테고리 : 전자기기</ProductCategory>
          <TradingPlace>거래 장소 : 코도모 동아리실</TradingPlace>
        </ProductInfoContainer>
        <AddCommentContainer>
          <div>
            <span>댓글 작성</span>
            <WriteButton>작성</WriteButton>
          </div>
          <CommentTextArea placeholder="댓글 내용을 입력해주세요"></CommentTextArea>
        </AddCommentContainer>
        <Comment />
      </ContentBox>
      <StylingLobby></StylingLobby>
    </Container>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const ContentBox = styled.div`
  z-index: 9;
  box-sizing: border-box;
  padding-top: 46px;
  width: 52%;
  padding-bottom: 46px;
  position: absolute;
  top: 150px;
  margin: 0px calc((100vw - 52%) / 2);
  background: #181738;
  box-shadow: 0px 0px 25px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  color: white;
  align-items: center;
  width: 86.6%;
`;

const Title = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 2em;
  flex-basis: 80%;
`;

const Date = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 1.25em;
  color: #909090;
  flex-grow: 1;
  text-align: end;
`;

const Writing = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 1.25em;
  color: #909090;
  padding-left: 12px;
  width: 50px;
`;

const Line = styled.div`
  width: 86.6%;
  border: 1px solid white;
  margin-top: 5px;
`;

const ProductImg = styled.img`
  width: 86.6%;
  margin-top: 25px;
`;

const ProductInfoContainer = styled.div`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Hakgyoansim Wooju";
  width: 86.6%;
  gap: 10px;
`;

const ProductExplan = styled.span`
  font-size: 1.25em;
`;

const ProductCategory = styled.span`
  margin-top: 30px;
  font-size: 20px;
`;

const TradingPlace = styled.span`
  font-size: 20px;
`;

const AddCommentContainer = styled.div`
  margin-top: 36px;
  width: 86.6%;
  height: 149px;
  border-radius: 15px;
  border: 1px solid var(--blacktowhitegrey-3, #d0d0d0);
  & > div {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & span {
    margin-left: 18px;
    color: #fff;
    font-family: Hakgyoansim Wooju;
    font-size: 1.25em;
    flex-grow: 1;
  }
`;

const WriteButton = styled.button`
  margin-right: 18px;
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  background: var(--mainbluelightblue-1, #726eff);
  width: 92px;
  height: 28px;
  flex-shrink: 0;
  color: #d9d9d9;
  cursor: pointer;
  &:hover {
    background-color: #9592ff;
  }
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  height: 104px;
  border: none;
  resize: none;
  outline: none;
  border-radius: 0px 0px 15px 15px;
  background-color: #d0d0d0;
  padding: 15px;
  box-sizing: border-box;
  font-family: Hakgyoansim Wooju;
  font-size: 20px;
  &::placeholder {
    color: grey;
    font-size: 16px;
  }
`;

export default ProductInfoComponent;
