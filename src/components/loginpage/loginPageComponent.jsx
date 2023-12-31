import React from "react";
import styled from "styled-components";
import StylingLobby from "../stylingLobby";
import { useState } from "react";
import { useRef } from "react";
import login from "../../utils/api/login";

const LoginPageComponent = () => {
  const [inputType, setInputType] = useState({
    type: "password",
    url: "./img/mdi_hide.svg",
  });
  const [loginColor, setLoginColor] = useState({
    color: "#606060",
    button: false,
  });
  const inputPassword = useRef();
  const inputEmail = useRef();
  const [inputValue, setInputValue] = useState({
    email: localStorage.getItem("email"),
    password: "",
  });

  const seePassword = () => {
    setInputType({
      type: "input",
      url: "./img/icon-visible-eye.svg",
    });
  };

  const removeInput = () => {
    setInputType({
      type: "password",
      url: "./img/mdi_hide.svg",
    });
  };

  const isPossible = () => {
    if (inputPassword.current.value !== "" && inputEmail.current.value !== "") {
      setLoginColor({ color: "#726eff", button: true });
    } else setLoginColor({ color: "#606060", button: false });
  };

  const changeValue = () => {
    setInputValue({
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    });
  };

  return (
    <>
      <StylingLobby></StylingLobby>
      <ProjectName href="/">대팔이</ProjectName>
      <ContainerBox>
        <LoginPage>
          <LoginHeader>로그인</LoginHeader>
          <Line />
          <Description>Email</Description>
          <InputBox>
            <InputInformation
              placeholder="enter your email"
              type="email"
              ref={inputEmail}
              onChange={() => {
                isPossible();
                changeValue();
              }}
              value={inputValue.email}
            />
          </InputBox>
          <Description>Password</Description>
          <InputBox>
            <InputInformation
              placeholder="enter your password"
              type={inputType.type}
              maxLength={20}
              ref={inputPassword}
              onChange={() => {
                isPossible();
                changeValue();
              }}
              value={inputValue.password}
            />
            <CheckPassword
              onMouseDown={seePassword}
              onMouseUp={removeInput}
              url={inputType.url}
            />
          </InputBox>
          <LoginButton
            background={loginColor.color}
            onClick={() => {
              if (loginColor.button) {
                login(inputValue.email, inputValue.password);
              }
            }}
          >
            로그인
          </LoginButton>
          <QuestionBox>
            <FoundAccount href="">비밀번호 찾기</FoundAccount>
            <RegisterButton href="/Register">회원가입</RegisterButton>
          </QuestionBox>
        </LoginPage>
      </ContainerBox>
    </>
  );
};

const ContainerBox = styled.div`
  position: absolute;
  top: 150px;
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 640px) {
    margin-top: 100px;
  }
`;

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
  width: 44vw;
  height: 58vh;
  min-height: 587px;
  flex-shrink: 0;

  border-radius: 45px;
  background: var(--mainbluedarkblue-2, #181737); //#181738
  box-shadow: 10px 20px 50px 0.3px rgba(0, 0, 0, 0.25);

  display: flex;
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
  white-space: nowrap;

  margin-top: 140px;
  margin-right: 220.5px;

  @media screen and (max-width: 900px) {
    visibility: hidden;
  }
`;

const Line = styled.div`
  width: 300.5px;
  height: 0px;

  border: 1px solid #726eff;

  margin-top: 5.75px;
  margin-bottom: 25px;
  @media screen and (max-width: 820px) {
    max-width: 300px;
    width: 90%;
  }
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
  width: 100%;
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
  @media screen and (max-width: 820px) {
    left: 85%;
  }
`;

const InputBox = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  width: 300px;
  @media screen and (max-width: 820px) {
    max-width: 300px;
    width: 90%;
  }
`;

const LoginButton = styled.button`
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => props.background};
  color: #fff;
  text-align: center;

  cursor: pointer;

  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 35px;

  @media screen and (max-width: 820px) {
    max-width: 300px;
    width: 90%;
  }
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
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;

  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  white-space: nowrap;

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
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-decoration: none;

  white-space: nowrap;
`;

export default LoginPageComponent;
