import React from "react";
import StylingLobby from "../stylingLobby";
import { styled } from "styled-components";

const SignUpPage = styled.div`
  width: 850px;
  height: 587px;
  flex-shrink: 0;

  border-radius: 45px;
  background: var(--mainbluedarkblue-2, #181738); //#181738
  box-shadow: 10px 20px 50px 0.3px rgba(0, 0, 0, 0.25);

  margin-top: 247.5px;
  margin-left: 535px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const SignUpHeader = styled.div`
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
  width: 300.5px;
  height: 0px;

  border: 1px solid #726eff;

  margin-top: 5.75px;
`;

const Description = styled.p`
  color: #fff;

  /* 12pt 학교안심 우주 */
  font-family: Hakgyoansim Wooju;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  justify-self: flex-start;
`;

const InputInformation = styled.input`
  width: 300px;
  height: 45px;
  flex-shrink: 0;

  border-radius: 10px;
  background: var(--blacktowhitegrey-1, #f6f6f6);

  color: var(--blacktowhitegrey-4, #909090);
  /* 16pt 학교안심 우주 */
  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-left: 14px;
  box-sizing: border-box;
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

const RegisterPageComponent = () => {
  return (
    <StylingLobby>
      <SignUpPage>
        <SignUpHeader>회원가입</SignUpHeader>
        <Line />
        <Description>User Id</Description>
        <InputInformation placeholder="enter your id" />
        <Description>Email</Description>
        <InputInformation placeholder="enter your email" />
        <Description>Password</Description>
        <InputInformation placeholder="enter your password" type="password" />
        <Description>Re-enter-Password</Description>
        <InputInformation placeholder="reenter your password" type="password" />
        <CompleteButton>회원가입</CompleteButton>
      </SignUpPage>
    </StylingLobby>
  );
};

export default RegisterPageComponent;
