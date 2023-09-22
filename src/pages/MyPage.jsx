import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";

const MyPage = (user) => {
    let userName = /*user.name*/ "조유리"; //조유리는 임시파일
    let userImg = user && user.image ? user.image : "./img/BasicProfile.svg"; // user이랑 user.img가 없을 경우에 BasicProfile를 띄운다.
    return (
        <Container>
            <Header />
            <StylingLobby>
                <User>
                    <UserImg src={userImg} alt="UserImage" />
                    <UserName>{userName}</UserName>
                </User>
            </StylingLobby>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
`;

const User = styled.div`
    width: 353px;
    height: 200px;
    position: relative;
    top: 224px;
    left: 128px;
`;
const UserImg = styled.img`
    width: 200px;
    border-radius: 200px;
`;

const UserName = styled.div`
    display: inline-block;
    width: 100px;
    height: 40px;
    color: #fff;
    font-family: Hakgyoansim Wooju;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position:relative;
    left:52px;
    bottom:80px;
`;

export default MyPage;
