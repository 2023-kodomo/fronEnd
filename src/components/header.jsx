import React from "react";
import styled from "styled-components";

const Header = ({ page = 0, user }) => {
  return (
    <Container>
      {/* <HeaderLogo>대팔이</HeaderLogo>
      <FlexContainer>
        <SearchBar>
          <InputBar />
          <SearchIcon />
        </SearchBar>
        <UserImg />
        <WelcomeText>{userName} 님 안녕하세요</WelcomeText>
      </FlexContainer> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 120px;
  /* background-color: */
`;

export default Header;
