import React from "react";
import styled from "styled-components";

export const MyQRCode = ({ closeModal }) => {
  return (
    <Container onClick={closeModal}>
      <MyQrcode onClick={(event) => event.stopPropagation()}>
        <QrHeader>내 QR코드</QrHeader>
        <QrLine />
        <QrImg src="./img/MyQrcode.svg" alt="MyQrCode" />
      </MyQrcode>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  &:hover {
    cursor: default;
  }
`;

const MyQrcode = styled.div`
  width: 40vw;
  height: 54.3519vh;
  border-radius: 2.3438vw;
  background-color: #181738;
  box-shadow: 10px 20px 50px 0.3px rgba(0, 0, 0, 0.25);
`;

const QrHeader = styled.div`
  width: 130px;
  position: relative;
  left: 14.349vw;
  top: 7.6852vh;
  color: #fff;
  font-family: Hakgyoansim Wooju;
  font-size: 1.6667vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const QrLine = styled.hr`
  width: 15.651vw;
  position: relative;
  top: 7.8704vh;
`;

const QrImg = styled.img`
  width: 18.2292vw;
  height: 32.4074vh;
  position: relative;
  left: 11vw;
  top: 9.2593vh;
`;
