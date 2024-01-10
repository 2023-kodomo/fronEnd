import { useState } from "react";
import styled from "styled-components";
import delProduct from "../../utils/api/delProduct";

const MoreModal = ({ product }) => {
  const [isDelete, setIsDelete] = useState(false);
  const editButtonClickHandler = () => {
    window.location.href = `/Modifying?productId=${product}`;
  };

  const delButtonClickHandler = () => {
    setIsDelete(!isDelete);
  };

  const handleDeleteCheck = async () => {
    await delProduct(product);
    window.location.href = "/";
  };

  return (
    <>
      <ModalBox>
        <EditButton onClick={editButtonClickHandler}>수정</EditButton>
        <hr />
        <DelButton onClick={delButtonClickHandler}>삭제</DelButton>
      </ModalBox>
      {isDelete && (
        <CancelBackground onClick={delButtonClickHandler}>
          <CancelContent>
            <CancelTitle>상품을 삭제하시겠습니까?</CancelTitle>
            <CancelCheckButton onClick={handleDeleteCheck}>
              확인
            </CancelCheckButton>
            <CancelCancelButton onClick={delButtonClickHandler}>
              닫기
            </CancelCancelButton>
          </CancelContent>
        </CancelBackground>
      )}
    </>
  );
};

export default MoreModal;

const ModalBox = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  border-radius: 16px;
  width: 96px;
  right: 50%;
  transform: translate(50%);
  display: flex;
  flex-direction: column;
  font-family: "Hakgyoansim Wooju";

  & > hr {
    margin: 0;
  }

  & > button {
    padding: 5px;
    background-color: white;
  }

  & > button:hover {
    cursor: pointer;
    background-color: #d9d9d9;
  }
`;

const EditButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: 16px 16px 0 0;
`;

const DelButton = styled.button`
  color: red;
  border: 0;
  outline: 0;
  border-radius: 0 0 16px 16px;
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
