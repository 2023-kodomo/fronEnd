import React, { useRef, useEffect, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../HeaderComponent";
import StylingLobby from "../stylingLobby";
import Comment from "./comment";
import getProduct from "../../utils/api/product";
import { useLocation } from "react-router-dom";
import postComment from "../../utils/api/postComment";
import { useNavigate } from "react-router-dom";

const ProductInfoComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  const commentInput = useRef();
  const contentBox = useRef();
  const [comments, setComments] = useState([]);
  const [datas, setDatas] = useState();
  const navigate = useNavigate();
  const [commentUpdate, setCommentUpdate] = useState(false);
  const [isLoding, setIsLoding] = useState(false);

  const memorizeFetch = useCallback(() => {
    const fetchData = async () => {
      try {
        setIsLoding(true);
        const productData = await getProduct(
          `${productId}`,
          navigate,
          setIsLoding
        ).then(() => {
          console.log(productData);
          setDatas(productData);
          setComments(() => {
            const { comment } = productData;
            if (comment) {
              comment.map((e) => {
                e.createdDate = e.createdDate
                  .substr(0, 19)
                  .replaceAll("-", ".")
                  .replaceAll("T", " / ");
              });
            }
            return comment;
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData(commentUpdate);
  }, [commentUpdate, productId, navigate]);

  useEffect(() => {
    memorizeFetch();
  }, [memorizeFetch]);

  const addComment = async () => {
    if (commentInput.current.value === "") {
      alert("댓글을 입력해주세요!");
      return;
    }
    const tmp = commentInput.current.value;
    commentInput.current.value = "";
    await postComment(productId, tmp);
    memorizeFetch();
    makeCommentComponent(comments);
  };

  const makeCommentComponent = (data) => {
    if (data) {
      return data.map((e, i) => {
        return (
          <Comment
            id={e.id}
            content={e.content}
            user={e.writer}
            createdDate={e.createdDate}
            key={i}
            commentUpdate={commentUpdate}
            setCommentUpdate={setCommentUpdate}
          />
        );
      });
    }
  };

  return (
    <Container>
      <Header page={0} />
      <StylingLobby></StylingLobby>
      {isLoding ? (
        ""
      ) : (
        <ContentBox ref={contentBox}>
          <a href={"/"}>
            <BeforeButton>
              <img src="./img/Arrow1.svg" alt="" />
            </BeforeButton>
          </a>
          <TextGroup>
            <Title>{datas && datas.title}</Title>
            <Date>
              {datas && datas.uploadDate.substr(0, 10).replaceAll("-", ".")}
            </Date>
            <Writing>{datas && datas.seller.name}</Writing>
          </TextGroup>
          <Line></Line>
          <ProductImg src={datas && datas.image} alt="상품 사진 로딩 실패" />
          <ProductInfoContainer>
            <ProductExplan>{datas && datas.content}</ProductExplan>
          </ProductInfoContainer>
          <AddCommentContainer>
            <div>
              <span>댓글 작성</span>
              <WriteButton onClick={addComment}>작성</WriteButton>
            </div>
            <CommentTextArea
              placeholder="댓글 내용을 입력해주세요"
              ref={commentInput}
              maxLength={150}
            ></CommentTextArea>
          </AddCommentContainer>
          {comments && makeCommentComponent(comments)}
        </ContentBox>
      )}
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
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ContentBox = styled.div`
  max-height: 75vh;
  min-width: 280px;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-top: 54px;
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
  border-radius: 29px;
  &::-webkit-scrollbar {
    display: none;
  }
  bottom: 30px;
`;

const BeforeButton = styled.button`
  background-color: #9a8cf2;
  border-radius: 27px;
  width: 38px;
  height: 38px;
  border: none;
  box-shadow: none;
  box-shadow: 0px 0px 6px;
  position: absolute;
  top: 8px;
  left: 8px;
  &:hover {
    animation: ${rotate} 1s;
    cursor: pointer;
  }
`;

const TextGroup = styled.div`
  display: flex;
  color: white;
  align-items: center;
  width: 86.6%;
  flex-wrap: wrap;
`;

const Title = styled.span`
  font-family: "Hakgyoansim Wooju";
  font-size: 2em;
  flex-basis: 75%;
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
  text-align: end;
`;

const Line = styled.div`
  width: 86.6%;
  border: 1px solid white;
  margin-top: 5px;
`;

const ProductImg = styled.img`
  width: 86.6%;
  margin-top: 25px;
  color: white;
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
