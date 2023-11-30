import React from "react";
import styled from "styled-components";
import StylingLobby from "../stylingLobby";
import { useState } from "react";

const ProjectName = styled.a`
  text-decoration: none;
  color: var(--blacktowhitewhite, #fff);
  text-align: center;

  font-family: Hakgyoansim Wooju;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  top: 40px;
  left: 40px;

  user-select: none;
`;

const LoginPage = styled.div`
  width: 850px;
  height: 587px;
  flex-shrink: 0;

  border-radius: 45px;
  background: var(--mainbluedarkblue-2, #181737); //#181738
  box-shadow: 10px 20px 50px 0.3px rgba(0, 0, 0, 0.25);

  margin-top: 200.5px;
  margin-left: 535px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  user-select: none;
`;

const LoginHeader = styled.div`
  color: #fff;

  font-family: Hakgyoansim Wooju;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 140px;
  margin-right: 220.5px;
`;

const Line = styled.div`
  width: 300.5px;
  height: 0px;

  border: 1px solid #726eff;

  margin-top: 5.75px;
  margin-bottom: 25px;
`;

const Description = styled.p`
  color: #fff;

  font-family: Hakgyoansim Wooju;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 20px;

  display: flex;
`;

const InputInformation = styled.input`
  width: 300px;
  height: 45px;
  flex-shrink: 0;

  display: block;

  border-radius: 10px;
  background: var(--blacktowhitegrey-1, #f6f6f6);

  color: black;
  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 14px;
  box-sizing: border-box;

  &::selection {
    background-color: #7a6ccf;
    color: #181738;
  }
`;

const CheckPassword = styled.button`
  background: url(${(props) => props.url}) no-repeat;
  width: 20px;
  height: 20px;
  border: none;
  margin: 0;

  position: absolute;
  top: 13.5px;
  left: 259px;

  cursor: pointer;
`;

const PasswordBox = styled.div`
  position: relative;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--mainbluelightblue-1, #726eff);
  color: #fff;
  text-align: center;

  cursor: pointer;

  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 35px;
`;

const QuestionBox = styled.div`
  position: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const FoundAccount = styled.a`
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-family: Hakgyoansim Wooju;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;
  width: 55px;
  height: 10px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  margin: 5px;
`;

const RegisterButton = styled.a`
  cursor: pointer;
  display: inline-flex;
  width: 23.121px;
  height: 10px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Hakgyoansim Wooju;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-decoration: none;
`;

const LoginPageComponent = () => {
  const [inputType, setInputType] = useState({
    type: "password",
    url: "./img/mdi_hide.svg",
  });

  const seePassword = () => {
    setInputType({
      type: "input",
      url: "./img/icon-visible-eye.svg",
    });
  };

  function removeInput() {
    setInputType({
      type: "password",
      url: "./img/mdi_hide.svg",
    });
  }
  return (
    <StylingLobby>
      <ProjectName href="/">대팔이</ProjectName>
      <LoginPage>
        <LoginHeader>로그인</LoginHeader>
        <Line />
        <Description>Email</Description>
        <InputInformation placeholder="enter your email" type="email" />
        <Description>Password</Description>
        <PasswordBox>
          <InputInformation
            placeholder="enter your password"
            type={inputType.type}
            maxLength={20}
          />
          <CheckPassword
            onMouseDown={seePassword}
            onMouseUp={removeInput}
            url={inputType.url}
          />
        </PasswordBox>
        <LoginButton>로그인</LoginButton>
        <QuestionBox>
          <FoundAccount>아이디 비밀번호 찾기</FoundAccount>
          <FoundAccount>계정이 없으신가요?</FoundAccount>
          <RegisterButton href="/Register">회원가입</RegisterButton>
        </QuestionBox>
      </LoginPage>
    </StylingLobby>
  );
};

export default LoginPageComponent;
