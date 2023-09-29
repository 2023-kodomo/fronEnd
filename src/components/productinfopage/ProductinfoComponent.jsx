import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../header";
import StylingLobby from "../stylingLobby";
import Comment from "./comment";

const ProductInfoComponent = () => {
  let content = useRef();
  let container = useRef();
  useEffect(() => {
    console.log(container.current.offsetHeight);
    console.log(content.current.scrollHeight);
    container.current.style.setProperty(
      "height",
      `${content.current.scrollHeight + 46}px`
    );
    console.log(container.current.scrollHeight);
    return () => {};
  }, [content, container]);

  return (
    <Container ref={container}>
      <Header page={0} />
      <StylingLobby></StylingLobby>
      <ContentBox ref={content}>
        <a href={"/"}>
          <BeforeButton>
            <img src="./img/Arrow1.svg" alt="" />
          </BeforeButton>
        </a>

        <TextGroup>
          <Title>학교에서 빼돌린 노트북 팝니다.</Title>
          <Date>2023.09.01</Date>
          <Writing>박지민</Writing>
        </TextGroup>
        <Line></Line>
        <ProductImg src="./img/img.png" alt="상품 사진" />
        <ProductInfoContainer>
          <ProductExplan>
            노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.노트북 오백원에 팝니다.노트북 오백원에
            팝니다.노트북 오백원에 팝니다.
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
  box-sizing: border-box;
  padding-top: 46px;
  width: 1000px;
  padding-bottom: 46px;
  position: absolute;
  top: 150px;
  margin: 0px 460px;
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
`;

const Title = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 32px;
`;

const Date = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 20px;
  color: #909090;
  padding-left: 357px;
`;

const Writing = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 20px;
  color: #909090;
  padding-left: 12px;
`;

const Line = styled.div`
  width: 864px;
  border: 1px solid white;
  margin-top: 5px;
`;

const ProductImg = styled.img`
  width: 870px;
  height: 450px;
  margin-top: 25px;
`;

const ProductInfoContainer = styled.div`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Hakgyoansim Wooju";
  width: 870px;
  gap: 10px;
`;

const ProductExplan = styled.span`
  font-size: 20px;
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
  width: 870px;
  height: 149px;
  border-radius: 15px;
  border: 1px solid var(--blacktowhitegrey-3, #d0d0d0);
  & > div {
    height: 45px;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 677px;
  }
  & span {
    color: #fff;
    font-family: Hakgyoansim Wooju;
    font-size: 20px;
  }
`;

const WriteButton = styled.button`
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
