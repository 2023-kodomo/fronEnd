import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ page = 0, user }) => {
  user = true; // test
  let userName;
  let userImg;
  if (user /*!==undefined*/) {
    userName = /*user.name*/ "테스트입니다.";
    userImg = user && user.image ? user.image : "./img/BasicProfile.svg";
  }
  return (
    <Container>
      <Linker href="/">
        <HeaderLogo>대팔이</HeaderLogo>
      </Linker>
      <FlexContainer>
        <SearchBar>
          <InputBar type="text" placeholder="검색할 상품을 입력해 주세요." />
          <SearchIcon src="./img/Searchicon.svg" alt="SearchIcon" />
        </SearchBar>
        <UserImg src={user ? userImg : null} alt={user ? "UserImg" : ""} />
        <WelcomeText>
          <Linker href="/mypage">
            <span className="Username">{userName}</span>
          </Linker>
          {user ? (
            <Linker href="/mypage">
              <span className="username"> 님 안녕하세요</span>
            </Linker>
          ) : (
            <>
              <span className="LoginText">
                로그인
                <link href="#" />
              </span>
              <span className="SignUpText">
                회원가입
                <link href="#" />
              </span>
            </>
          )}
        </WelcomeText>
      </FlexContainer>
    </Container>
  );
};

const Linker = styled.a`
  text-decoration: none;
`;

const HeaderLogo = styled.div`
  color: white;
  font-family: "Hakgyoansim Wooju";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
`;

const SearchBar = styled.div`
  width: 510px;
  height: 32px;
  padding: 10px 10px 10px 20px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid white;
  @media screen and (max-width: 1700px) {
    width: 450px;
  }
  @media screen and (max-width: 1500px) {
    width: 400px;
  }
  @media screen and (max-width: 1300px) {
    width: 320px;
  }
  @media screen and (max-width: 1100px) {
    width: 274px;
  }
  @media screen and (max-width: 800px) {
    width: 225px;
  }
  @media screen and (max-width: 600px) {
    width: 190px;
  }
`;

const InputBar = styled.input`
  width: 478px;
  background-color: transparent;
  font-family: "Hakgyoansim Wooju";
  color: white;
  font-size: 16px;
  &::-ms-clear,
  &::-ms-reveal {
    opacity: 0;
    position: absolute;
    right: 0;
  }
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1px solid #7a6ccf;
  cursor: pointer;
  display: ${(props) => (props.src ? "inline-block" : "none")};
`;
const WelcomeText = styled.div`
  font-family: "Hakgyoansim Wooju";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: ${(props) => (props.user ? "none" : "flex")};
  gap: ${(props) => (props.user ? "0" : "16px")};
  @media screen and (max-width: 579px) {
    font-size: 15px;
  }
  @media screen and (max-width:567px) {
    font-size: 13px;
  }
  @media screen and (max-width:540px) {
    font-size: 10px;
  }
  @media screen and (max-width:520px) {
    font-size: 9.8px;
  }
  & > span {
    cursor: pointer;
  }
  & > span.LoginText {
    color: #7a6ccf;
    font-family: "Hakgyoansim Wooju";
  }
  & .Username {
    color: #e2ddff;
    font-family: "Hakgyoansim Wooju";
  }
  & .username {
    @media screen and (max-width: 993px) {
      display: none;
    }
    color: #7a6ccf;
    font-family: "Hakgyoansim Wooju";
  }
  & > line {
    text-decoration-line: none;
  }
  & > span.SignUpText {
    color: #e2ddff;
    font-family: "Hakgyoansim Wooju";
  }
`;

const Container = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  position: absolute;
  width: 100vw;
  height: 120px;
  background-color: #181738;
  z-index: 1;
  box-sizing: border-box;
`;

export default Header;
