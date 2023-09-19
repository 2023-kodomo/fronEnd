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
`;

const InputBar = styled.input`
  width: 478px;
  background-color: transparent;
  font-family: "Hakgyoansim Wooju";
  color: white;
  font-size: 16px;
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
`;
const WelcomeText = styled.div`
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
