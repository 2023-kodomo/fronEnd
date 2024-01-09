import React, { useEffect } from "react";
import styled from "styled-components";

const EmailModal = ({ modalText, setModalOpen }) => {
  const clickHandler = () => {
    if (modalText === "인증된 사용자 입니다") {
      setModalOpen("");
    }
    setModalOpen("");
  };

  setTimeout(() => {
    setModalOpen("");
  }, 5000);

  return (
    <>
      <BlackBackground onClick={clickHandler}>
        <ModalContainer>{modalText}</ModalContainer>
      </BlackBackground>
    </>
  );
};

export default EmailModal;

const BlackBackground = styled.div`
  position: fixed;
  /* z-index: 2; */
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181738;
  width: 45%;
  height: 50%;
  position: relative;
  color: white;
  color: #fff;

  font-family: Hakgyoansim Wooju;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
