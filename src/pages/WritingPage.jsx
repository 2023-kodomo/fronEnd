import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";

const PostingPage = () => {
  const [image, setImage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [priceFocus, setPriceFocus] = useState(false);
  const maxLength = 13;
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
  const handleCancel = () => {
    const shouldCancel = window.confirm("글 작성을 취소하시겠습니까?");
    if (shouldCancel) {
      window.location.href = "./";
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
                <PostingImg src={image} alt="" />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="fileInput"
                  onChange={handleFileInputChange}
                  required
                />
                <ButtonCase>
                  {image && (
                    <ImgDelete onClick={handleImageDelete}>삭제</ImgDelete>
                  )}
                  <ImgInsert onClick={handleImageUpload}>삽입</ImgInsert>
                </ButtonCase>
              </ImgBox>
              <Ground>
                <AlignUl>
                  <PostingLi>
                    <ProductLabel>상품명</ProductLabel>
                    <ProductName
                      type="text"
                      placeholder="상품명 입력"
                      required
                    />
                  </PostingLi>
                  <PostingLi>
                    <ProductLabel>상품 설명</ProductLabel>
                    <ProductExplain
                      rows={4}
                      placeholder="상품 설명 입력"
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
                  <PostingLi>
                    <ProductLabel>시간</ProductLabel>
                    <TransactionAppointmentTime type="text" required />
                  </PostingLi>
                  <PostingLi>
                    <ProductLabel>장소</ProductLabel>
                    <TradingPlace type="text" required />
                  </PostingLi>
                </AlignUl>
                <ConfirmButtonCase>
                  <PostingCancel type="button" onClick={handleCancel}>
                    취소
                  </PostingCancel>
                  <PostingConfirm>게시</PostingConfirm>
                </ConfirmButtonCase>
              </Ground>
            </PostingField>
          </PostingForm>
        </PostingFrame>
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
  height: 603px;
  background-color: rgba(6, 5, 39, 0.5);
  border-radius: 16px;
  position: fixed;
  top: 210px;
  right: 213.5px;
  animation: ${fadeIn} 1s;
`;

const ImgBox = styled.div`
  display: block;
  width: 378px;
  height: 451px;
  margin-right: 38px;
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

const ButtonCase = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 39px 37px 39px;
`;

const ConfirmButtonCase = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
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
  height: 603px;
  margin: 0px;
`;

const PostingField = styled.fieldset`
  display: flex;
  width: 1349px;
  height: 451px;
  border-style: none;
  margin: 0px;
  padding: 76px;
`;

const Ground = styled.div`
  margin: 0px;
  padding: 0px;
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
  margin: 0px 0px 15px;
  padding: 0px;
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
  font-size: 28px;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const ProductExplain = styled.textarea`
  width: 539px;
  height: 96px;
  background-color: #e2ddff;
  border-style: none;
  padding: 16px;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  resize: none;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const ProductPrice = styled.input`
  width: 270px;
  height: 50px;
  background-color: #e2ddff;
  border-style: none;
  padding-right: 16px;
  text-align: center;
  font-size: 30px;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
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

const TransactionAppointmentTime = styled.input`
  width: 567px;
  height: 50px;
  background-color: #e2ddff;
  border-style: none;
  text-align: center;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
  }
`;

const TradingPlace = styled.input`
  width: 567px;
  height: 50px;
  background-color: #e2ddff;
  border-style: none;
  text-align: center;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  transition: box-shadow 0.6s, border-radius 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  &:focus {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
  }
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
  }
  &:active {
    border: 3px solid #3fca10;
    background-color: #3fca10;
    transform: scale(0.85);
  }
`;

export default PostingPage;
