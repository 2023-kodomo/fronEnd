import React from "react";
import StylingLobby from "../stylingLobby";
import { styled } from "styled-components";
import { useState, useRef } from "react";

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

const SignUpPage = styled.div`
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

const SignUpHeader = styled.div`
  color: #fff;

  font-family: Hakgyoansim Wooju;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 83px;
  margin-right: 201.5px;
`;

const Line = styled.div`
  width: 300.5px;
  height: 0px;

  border: 1px solid #726eff;

  margin-top: 5.75px;
`;

const Description = styled.p`
  color: #fff;

  font-family: Hakgyoansim Wooju;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

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

const CompleteButton = styled.button`
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--mainbluelightblue-1, #726eff);

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 12px;
  margin-top: 49px;

  cursor: pointer;
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

const ErrorMessage = styled.p`
  //비밀번호를 입력했을 때 비밀번호가 불일치 할 경우에만 보일 것
  color: var(--RED, #ca2810);
  text-align: center;
  font-family: Hakgyoansim Wooju;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  left: 10px;
`;

const RegisterPageComponent = () => {
  const [inputType, setInputType] = useState({
    type: "password",
    url: "./img/mdi_hide.svg",
  });
  const [reInputType, reSetInputType] = useState({
    type: "password",
    url: "./img/mdi_hide.svg",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [maxLength, setMaxLength] = useState(20);
  const inputId = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputRePassword = useRef();
  const passwordMessage = useRef();

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

  const reSeePassword = () => {
    reSetInputType({
      type: "input",
      url: "./img/icon-visible-eye.svg",
    });
  };

  function reRemoveInput() {
    reSetInputType({
      type: "password",
      url: "./img/mdi_hide.svg",
    });
  }

  const isSamePassword = () => {
    if (
      inputPassword.current.value == "" ||
      inputRePassword.current.value == ""
    )
      return false;
    else {
      return inputPassword.current.value === inputRePassword.current.value
        ? true
        : false;
    }
  };

  const changeErrorMessage = () => {
    if (inputRePassword.current.value === "") return setErrorMessage("");
    if (inputPassword.current.value === "") return setErrorMessage("");
    return inputPassword.current.value === inputRePassword.current.value
      ? setErrorMessage("")
      : setErrorMessage("비밀번호를 잘못 입력하셨습니다");
  };

  function inputMaxLength() {
    const id = inputId.current.value;
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (check.test(id)) {
      setMaxLength(8);
      // if (id.length >= 8)
    } else {
      setMaxLength(20);
      // if(id.length>=20)
    }
  }

  return (
    <StylingLobby>
      <ProjectName href="/">대팔이</ProjectName>
      <SignUpPage>
        <SignUpHeader>회원가입</SignUpHeader>
        <Line />
        <Description>User Id</Description>
        <InputInformation
          placeholder="enter your id"
          maxLength={maxLength}
          ref={inputId}
          onChange={inputMaxLength}
        />
        <Description>Email</Description>
        <InputInformation
          placeholder="enter your email"
          type="email"
          ref={inputEmail}
        />
        <Description>Password</Description>
        <PasswordBox>
          <InputInformation
            placeholder="enter your password"
            type={inputType.type}
            maxLength={20}
            ref={inputPassword}
            onChange={changeErrorMessage}
          />
          <CheckPassword
            onMouseDown={seePassword}
            onMouseUp={removeInput}
            url={inputType.url}
          />
        </PasswordBox>
        <Description>Reenter Password</Description>
        <PasswordBox>
          <InputInformation
            placeholder="reenter your password"
            type={reInputType.type}
            maxLength={20}
            ref={inputRePassword}
            onChange={changeErrorMessage}
          />
          <CheckPassword
            onMouseDown={reSeePassword}
            onMouseUp={reRemoveInput}
            url={reInputType.url}
          />
          <ErrorMessage ref={passwordMessage}>{errorMessage}</ErrorMessage>
        </PasswordBox>
        <CompleteButton
          onClick={() => {
            isSamePassword();
            console.log(isSamePassword());
          }}
        >
          회원가입
        </CompleteButton>
      </SignUpPage>
    </StylingLobby>
  );
};

export default RegisterPageComponent;
