import React from "react";
import styled from "styled-components";

const Header = ({ page = 0, user }) => {
    let userName = "조유리";
    return (
        <Container>
            <HeaderLogo>대팔이</HeaderLogo>
            <FlexContainer>
                <SearchBar>
                    <InputBar
                        type="search"
                        placeholder="검색할 상품을 입력해 주세요."
                    />
                    <SearchIcon src="./img/Searchicon.svg" alt="SearchIcon" />
                </SearchBar>
                <UserImg src="./img/Yuri.svg" alt="UserImg" />
                <WelcomeText>{userName}님 안녕하세요</WelcomeText>
            </FlexContainer>
        </Container>
    );
};

const HeaderLogo = styled.div`
    font-size: 32px;
    font-style: norma;
    font-weight: 400;
    position: absolute;
    left: 40px;
    top: 35px;
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
    display: inline-block;
`;

const InputBar = styled.input`
    width: 478px;
    background-color: transparent;
`;
const SearchIcon = styled.img`
    width: 32px;
    height: 32px;
`;
const UserImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    border: 1px solid #7a6ccf;
`;
const WelcomeText = styled.div``;

const Container = styled.div`
    width: 100vw;
    height: 120px;
    /* background-color: */
`;

export default Header;
