import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import sendEmail from "../../utils/api/sendEmail";
import emailAuth from "../../utils/api/emailAuth";
import EmailModal from "./modal";
import resendEmail from "../../utils/api/resendEmail";

const EmailPageComponent = () => {
  const email = localStorage.getItem("email");
  const inputRef = useRef();
  const [modalText, setModalText] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") {
      setModalText("인증된 사용자 입니다");
    }
  }, [modalText]);

  useEffect(() => {
    sendEmail(email);
  }, [email]);

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem("isAuth", true);
    }
  }, [isAuth]);

  const authCodeFetch = async () => {
    if (inputRef && inputRef.current.value) {
      const { data } = await emailAuth(inputRef.current.value);
      console.log(data);
      inputRef.current.value = "";
      setIsAuth(data.isSuccess);
      setModalText(data.message);
    }
  };

  const resendHandler = () => {
    resendEmail();
  };

  return (
    <Container>
      <EmailCitationContainer>
        <EmailTitle>
          <Head>이메일 인증</Head>
          <hr />
          <span>
            회원가입된 이메일 {`${email}`} 로 <br />
            인증 메일을 보냈습니다.
          </span>
        </EmailTitle>
        <EmailInputContainer>
          <span>인증코드</span>
          <AuthCodeInput placeholder="인증코드를 입력해주세요" ref={inputRef} />
          <SubmitButton onClick={authCodeFetch}>인증 완료</SubmitButton>
        </EmailInputContainer>
        <ReSend onClick={resendHandler}>재전송</ReSend>
      </EmailCitationContainer>
      {modalText !== "" && (
        <EmailModal modalText={modalText} setModalOpen={setModalText} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
`;

const EmailCitationContainer = styled.div`
  max-height: fit-content;
  min-height: 100px;
  min-width: 320px;
  box-sizing: border-box;
  padding-top: 8vh;
  width: 45%;
  padding-bottom: 9vh;
  position: absolute;
  top: 25%;
  margin: 0px calc((100vw - 45%) / 2);
  background: #181738;
  box-shadow: 0px 0px 25px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 29px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-height: 640px) {
    top: 130px;
  }
`;

const EmailTitle = styled.div`
  width: 300px;
  color: white;
  font-family: "Hakgyoansim Wooju";
  text-align: center;
  & > hr {
    margin: 0 4px;
    background-color: #726eff;
    height: 1px;
    border: 0;
    margin-bottom: 4px;
  }
`;

const Head = styled.div`
  text-align: start;
  color: white;
  font-size: 32px;
`;

const EmailInputContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    margin-bottom: 7px;
    color: #fff;
    font-family: "Hakgyoansim Wooju";
    font-size: 12px;
  }
`;

const AuthCodeInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 45px;
  border-radius: 10px;
  padding-left: 14px;
  background: #f6f6f6;
  font-family: "Hakgyoansim Wooju";
  margin-bottom: 24px;
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 10px;
  background-color: #726eff;
  color: white;
  border: none;
  margin-bottom: 42px;
  font-family: "Hakgyoansim Wooju";
  font-size: 16px;
  cursor: pointer;
`;

const ReSend = styled.span`
  color: #909090;
  font-family: "Hakgyoansim Wooju";
  font-size: 16px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export default EmailPageComponent;
