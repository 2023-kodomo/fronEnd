import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../HeaderComponent";
import StylingLobby from "../stylingLobby";

const PostingPageComponent = () => {
  const [image, setImage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isPostingCancel, setIsPostingCancel] = useState(false);
  const [text, setText] = useState("");
  const [explain, setExplain] = useState("");
  const maxLength = 11;
  const handleImageUpload = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };
  const handleImageDelete = () => {
    setImage(null);
  };
  const handleFileInputChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  };
  const handlePstCancel = () => {
    setIsPostingCancel(false);
  };
  const handlePstCancelCk = () => {
    setIsPostingCancel(true);
  };
  const handleCancel = () => {
    window.location.href = "./";
  };
  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 20) {
      setText(inputValue);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue.length > maxLength) {
      numericValue = numericValue.slice(0, maxLength);
    }
    setInputValue(numericValue);
  };
  const handleBlur = () => {
    const formattedValue =
      inputValue === "" ? "0" : Number(inputValue).toLocaleString();
    setInputValue(formattedValue);
  };
  const handleFocusPrice = () => {
    if (inputValue == "0" || inputValue == "NaN") setInputValue("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleExplainChange = (event) => {
    const explainText = event.target.value;
    if (explainText.length <= 500) {
      setExplain(explainText);
    }
  };
  return (
    <>
      <Container>
        <Header />
        <StylingLobby></StylingLobby>
        <PostingFrame>
          <PostingForm onSubmit={handleSubmit}>
            <PostingField>
              <ImgBox>
                <ImgSpan>물품 사진 ※ 사진은 한 장만 넣을 수 있습니다</ImgSpan>
                {image ? (
                  <PostingImg src={image} alt="" />
                ) : (
                  <NoneImg src="./img/NoneImage.svg" alt="None Image" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="fileInput"
                  onChange={handleFileInputChange}
                />
                <ButtonCase>
                  {image && (
                    <ImgDelete onClick={handleImageDelete}>삭제</ImgDelete>
                  )}
                  <ImgInsert type="button" onClick={handleImageUpload}>
                    삽입
                  </ImgInsert>
                </ButtonCase>
              </ImgBox>
              <Ground>
                <AlignUl>
                  <PostingLi>
                    <ProductLabel>상품명</ProductLabel>
                    <ProductName
                      type="text"
                      value={text}
                      onChange={handleTitleChange}
                      maxLength={20}
                      placeholder="상품명 입력(공백 포함 최대 20글자)"
                      required
                    />
                  </PostingLi>
                  <PostingLi>
                    <ProductLabel>상품 설명</ProductLabel>
                    <ProductExplain
                      value={explain}
                      rows={6}
                      onChange={handleExplainChange}
                      placeholder="상품 설명 입력(공백 포함 500자)"
                      required
                    ></ProductExplain>
                  </PostingLi>
                  <PostingLi>
                    <ProductLabel>가격</ProductLabel>
                    <ProductPrice
                      type="text"
                      value={inputValue}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocusPrice}
                      maxLength={maxLength}
                      placeholder="',' 없이 숫자로 입력"
                      required
                    />
                    <PrintWon>{inputValue}원</PrintWon>
                  </PostingLi>
                </AlignUl>
                <ConfirmButtonCase>
                  <PostingCancel type="button" onClick={handlePstCancelCk}>
                    취소
                  </PostingCancel>
                  <PostingConfirm>게시</PostingConfirm>
                </ConfirmButtonCase>
              </Ground>
            </PostingField>
          </PostingForm>
        </PostingFrame>
        {isPostingCancel && (
          <CancelBackground onClick={handlePstCancel}>
            <CancelContent>
              <CancelTitle>글 작성을 취소하시겠습니까?</CancelTitle>
              <CancelCheckButton onClick={handleCancel}>확인</CancelCheckButton>
              <CancelCancelButton onClick={handlePstCancel}>
                닫기
              </CancelCancelButton>
            </CancelContent>
          </CancelBackground>
        )}
      </Container>
    </>
  );
};

const fadeIn = keyframes`
    0% {
        transform: translateY(-64px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Container = styled.main`
  width: 100vw;
`;

const PostingFrame = styled.div`
  display: flex;
  width: 1501px;
  height: 649px;
  background-color: #181738;
  border-radius: 16px;
  position: fixed;
  top: 210px;
  right: 190.5px;
  box-shadow: 0 0 25px 16px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 1s;
`;

const ImgBox = styled.div`
  display: inline-block;
  width: 378px;
  height: 451px;
  position: relative;
  margin-right: 38px;
  left: 65px;
`;

const ImgSpan = styled.span`
  display: block;
  margin: 37px 39px 0px 39px;
  color: white;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const PostingImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 10px 39px 0px 39px;
`;

const NoneImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 10px 39px 0px 39px;
  opacity: 0.1;
`;

const ButtonCase = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 39px 37px 39px;
`;

const ConfirmButtonCase = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  padding-right: 40px;
`;

const ImgInsert = styled.button`
  width: 78px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid #000000;
  background-color: #f6f6f6;
  color: black;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
  margin-left: 10px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.14);
  }
`;

const ImgDelete = styled.button`
  width: 78px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid #000000;
  background-color: #f6f6f6;
  color: black;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
  margin-left: 10px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.14);
  }
`;

const PostingForm = styled.form`
  display: block;
  width: 1501px;
  height: 649px;
  margin: 0px;
`;

const PostingField = styled.fieldset`
  display: flex;
  justify-content: space-between;
  width: 1349px;
  height: 497px;
  border-style: none;
  margin: 0px;
  padding: 76px;
`;

const Ground = styled.div`
  display: inline-block;
  width: 850px;
  height: 422px;
  margin: 0px;
  padding: 63px 9px 16px;
`;

const AlignUl = styled.ul`
  background-color: rgba(0, 0, 0, 0);
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const PostingLi = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 0px 40px;
  padding: 0;
  color: white;
  text-align: left;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
`;

const ProductLabel = styled.label`
  display: inline-block;
  text-align: left;
  align-items: center;
  margin-left: 61px;
  width: 180px;
  color: white;
  text-align: left;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const ProductName = styled.input`
  width: 567px;
  height: 45px;
  background-color: #e2ddff;
  border-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: 5px;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
  &:focus {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const ProductExplain = styled.textarea`
  width: 534px;
  height: 129px;
  background-color: #e2ddff;
  border-style: none;
  padding: 16px;
  margin: 0;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: 5px;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  overflow: auto;
  resize: none;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 16px;
    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
    &::-webkit-scrollbar-track {
      background-color: none;
    }
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 16px;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 1;
  }
  &::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    opacity: 1;
  }
`;

const ProductPrice = styled.input`
  width: 270px;
  height: 50px;
  background-color: #e2ddff;
  border-style: none;
  padding-right: 16px;
  text-align: center;
  margin: 0;
  font-size: 30px;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: 5px;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 16px;
  }
  &:focus {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 16px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const PrintWon = styled.span`
  display: inline-block;
  width: 270px;
  margin-left: 12px;
  color: #dddddd;
  text-align: right;
  font-size: 34px;
  font-style: inherit;
  font-weight: 700;
  line-height: inherit;
  font-family: inherit;
`;

const PostingCancel = styled.button`
  width: 160px;
  height: 42px;
  border-radius: 16px;
  border: 3px solid #7a6ccf;
  background-color: #7a6ccf;
  color: white;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
  margin-left: 17px;
  transition: border 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
  &:hover {
    border: 3px solid #ca2810;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    border: 3px solid #ca2810;
    background-color: #ca2810;
    transform: scale(0.85);
  }
`;

const PostingConfirm = styled.button`
  width: 160px;
  height: 42px;
  border-radius: 16px;
  border: 3px solid #c0b7fa;
  background-color: #c0b7fa;
  color: black;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Hakgyoansim Wooju";
  margin-left: 17px;
  transition: border 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
  &:hover {
    border: 3px solid #3fca10;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    border: 3px solid #3fca10;
    background-color: #3fca10;
    transform: scale(0.85);
  }
`;

const CancelBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const CancelContent = styled.div`
  background-color: #eeeeee;
  width: 330px;
  height: 100px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: "Hakgyoansim Wooju";
`;

const CancelTitle = styled.h2`
  margin: 5px 5px 20px;
  color: black;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-family: inherit;
`;

const CancelCheckButton = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 10px;
  padding: 5px 10px;
  border: 2px solid black;
  margin-left: 160px;
  margin-right: 10px;
  background-color: #f6f6f6;
  border-radius: 3px;
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-family: inherit;
  transition: border 0.2s ease, background-color 0.2s ease, transform 0.2s ease,
    color 0.2s ease;
  &:hover {
    border: 3px solid #3fca10;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    border: 3px solid #3fca10;
    background-color: #3fca10;
    transform: scale(0.85);
    color: white;
  }
`;

const CancelCancelButton = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 10px;
  padding: 5px 10px;
  border: 2px solid black;
  background-color: #f6f6f6;
  border-radius: 3px;
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-family: inherit;
  transition: border 0.2s ease, background-color 0.2s ease, transform 0.2s ease,
    color 0.2s ease;
  &:hover {
    border: 3px solid #ca2810;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    border: 3px solid #ca2810;
    background-color: #ca2810;
    transform: scale(0.85);
    color: white;
  }
`;

export default PostingPageComponent;