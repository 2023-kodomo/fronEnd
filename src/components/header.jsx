import React from "react";
import styled from "styled-components";

const Header = ({ page = 0, user }) => {
    user = false; // test
    let userName;
    let userImg;
    if (user /*!==undefined*/) { // 만약 undefiend가 아닐 경우 실행
        userName = /*user.name*/ "조유리"; //조유리는 임시파일
        userImg = /*user.image*/ "./img/Yuri.svg"; // Yuri.svg도 임시 사진
    }
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
                <UserImg
                    src={user ? userImg : null}
                    alt={user ? "UserImg" : ""}
                />
                {/*user가 있을 경우에 alt랑 userImg가 나오게 하고, 없을 경우에는 그냥 없다.*/}
                <WelcomeText>
                    <span className="Username">
                        <link href="#" />
                        {userName}
                    </span>
                    {user ? (
                        <span className="username"> 님 안녕하세요</span>
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
                    {/*user가 있을 경우에 "님 안녕하세요"를 출력, 없을 경우에는 <><span>로그인</span> <span>회원가입</span></>를 출력*/}
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
    display: ${(props) =>
        props.src
            ? "inline-block"
            : "none"}; // user가 있는 경우에만 표시 (여기는 잘 작동을 안하는 것같아서 모르겠음)
`;
const WelcomeText = styled.div`
    font-family: "Hakgyoansim Wooju";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: ${(props) => (props.user ? "none" : "flex")};
    gap: ${(props) => (props.user ? "0" : "16px")};
    & > span {
        cursor: pointer;
    }
    & > span.LoginText {
        color: #7a6ccf;
    }
    & > .Username{ // 사용자 이름
        color:#E2DDFF;
    }
    & > .username{ // "님 안녕하세요"부분
        color:#7a6ccf;
    }
    & > line {
        text-decoration-line: none;
    }
    & > span.SignUpText {
        color: #e2ddff;
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
