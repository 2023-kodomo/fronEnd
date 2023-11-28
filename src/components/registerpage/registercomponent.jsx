import React from "react";
import StylingLobby from "../stylingLobby";
import { styled } from "styled-components";
import { useState, useRef } from "react";

const SignUpPage = styled.div`
  //기본 감싸는 레이아웃
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
  //창 이름
  color: #fff;

  /* 32pt 학교안심 우주 */
  font-family: Hakgyoansim Wooju;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 83px;
  margin-right: 201.5px;
`;

const Line = styled.div`
  //구분선
  width: 300.5px;
  height: 0px;

  border: 1px solid #726eff;

  margin-top: 5.75px;
`;

const Description = styled.p`
  //입력창 위에 있는 설명란
  color: #fff;

  /* 12pt 학교안심 우주 */
  font-family: Hakgyoansim Wooju;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
`;

const InputInformation = styled.input`
  //정보 입력창
  width: 300px;
  height: 45px;
  flex-shrink: 0;

  display: block;

  border-radius: 10px;
  background: var(--blacktowhitegrey-1, #f6f6f6);

  color: black;
  /* 16pt 학교안심 우주 */
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
  //회원가입 버튼
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

  /* 16pt 학교안심 우주 */
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
  //눈깔 이미지 "비밀번호 확인하기"
  background: url("./img/mdi_hide.svg") no-repeat;
  width: 20px;
  height: 20px;
  border: none;
  margin: 0;

  position: absolute;
  top: 13.5px;
  left: 259px;
`;

const PasswordBox = styled.div`
  position: relative;
`;

const RegisterPageComponent = () => {
  const [insert, setInsert] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [reInputType, reSetInputType] = useState("password");
  const inputId = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputRePassword = useRef();

  const seePassword = () => {
    //마우스를 누르고 있을 때 비밀번호 표시
    setInputType("input");
  };

  function removeInput() {
    //마우스를 땠을 때 비밀번호 감추기
    setInputType("password");
  }

  const reSeePassword = () => {
    //마우스를 누르고 있을 때 비밀번호 표시
    reSetInputType("input");
  };

  function reRemoveInput() {
    //마우스를 땠을 때 비밀번호 감추기
    reSetInputType("password");
  }

  // function inputMaxLength(refe) {//  InputInformation에 maxLength프로퍼티에 들어갈 함수(한글이면 return 8 영어면 return 20을 반환한다)
  //   const string = refe.current.value;
  //   console.log(string);
  // }
  // inputMaxLength(inputId);

  function isSamePassword() {
    if (inputPassword.current.value == "" || inputRePassword.current.value == "") return false;
    else {
      return inputPassword.current.value === inputRePassword.current.value
        ? true
        : false;
    }
  }

  return (
    <StylingLobby>
      <SignUpPage>
        <SignUpHeader>회원가입</SignUpHeader>
        <Line />
        <Description>User Id</Description>
        <InputInformation
          placeholder="enter your id"
          maxLength={20}
          ref={inputId}
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
            type={inputType}
            maxLength={20}
            ref={inputPassword}
          />
          <CheckPassword onMouseDown={seePassword} onMouseUp={removeInput} />
        </PasswordBox>
        <Description>Reenter Password</Description>
        <PasswordBox>
          <InputInformation
            placeholder="reenter your password"
            type={reInputType}
            maxLength={20}
            ref={inputRePassword}
          />
          <CheckPassword
            onMouseDown={reSeePassword}
            onMouseUp={reRemoveInput}
          />
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
