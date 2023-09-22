import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";
import ProductPost from "../components/product";

const MyPage = (user) => {
    let userName = /*user.name*/ "남궁윤교"; //임시이름
    let userImg = user && user.image ? user.image : "./img/BasicProfile.svg"; // user이랑 user.img가 없을 경우에 BasicProfile를 띄운다.
    return (
        <Container>
            <Header />
            <StylingLobby>
                <User>
                    <UserImg src={userImg} alt="UserImage" />
                    <UserName>{userName}</UserName>
                </User>
                <UserItem>
                    <SellingItemTitle>내가 팔고 있는 물건</SellingItemTitle>
                    <SellingItem>
                        <ProductPost />
                        <ProductPost />
                        <ProductPost />
                        <ProductPost />
                        <ProductPost />
                        <ProductPost />
                        <ProductPost />
                    </SellingItem>
                </UserItem>
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
    min-width: 150px;
    height: 40px;
    color: #fff;
    font-family: Hakgyoansim Wooju;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    left: 280px;
    bottom: 80px;
`;

const UserItem = styled.div`
    width: 99vw;
    height: 100px;
    position: relative;
    top: 500px;
    right: 291px;
`;

const SellingItemTitle = styled.div`
    font-family: "Hakgyoansim Wooju";
    font-size: 32px;
    position: relative;
    bottom: 32px;
    left: 128px;
    color: #fff;
`;

const SellingItem = styled.div`
    display: flex; // 가로로 정렬하기 위한 설정
    flex-direction: row; // 자식 요소들을 가로로 정렬
    flex-wrap: wrap;
    gap: 83px;
    position: relative;
    left: 128px;
    justify-content: flex-start;
`;

export default MyPage;
