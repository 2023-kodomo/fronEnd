import React from "react";
import styled from "styled-components";

const Header = ({ page = 0, user }) => {
  let userName = "조유리";
  return (
    <Container>
      <HeaderLogo>대팔이</HeaderLogo>
      <FlexContainer>
        <SearchBar>
          <InputBar type="search" placeholder="검색할 상품을 입력해 주세요." />
          <SearchIcon src="./img/Searchicon.svg" alt="SearchIcon" />
        </SearchBar>
        <UserImg src="./img/Yuri.svg" alt="UserImg" />
        <WelcomeText>
          <span>{userName}</span> 님 안녕하세요
        </WelcomeText>
      </FlexContainer>
    </Container>
  );
};

const HeaderLogo = styled.div`
  color: white;
  font-family: "Hakgyoansim Wooju";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  position: absolute;
  left: 40px;
  top: 35px;
  cursor: pointer;
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  position: relative;
  right: 40px;
`;

const SearchBar = styled.div`
  width: 510px;
  height: 32px;
  padding: 10px 10px 10px 20px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid white;
  display: inline-block;
`;

const InputBar = styled.input`
  width: 478px;
  background-color: transparent;
  font-family: "Hakgyoansim Wooju";
  color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
const UserImg = styled.img`
  position: relative;
  top: 8px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1px solid #7a6ccf;
  cursor: pointer;
`;
const WelcomeText = styled.div`
  position: relative;
  top: 8px;
  color: #7a6ccf; // 임시방편 색깔
  font-family: "Hakgyoansim Wooju";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  & > span {
    color: white;
    cursor: pointer;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 120px;
  background-color: #181738;
  z-index: 1;
`;

export default Header;
