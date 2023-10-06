import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";
import ProductPost from "../components/product";
import UserInfo from "../components/MyPage/User";

const MyPage = (user) => {
    return (
        <Container>
            <Header />
            <StylingLobby>
                <UserInfo name="userInfo" />
                <UserItem>
                    <SellingItemTitle>내가 팔고 있는 물건</SellingItemTitle>
                    <SellingItem>
                        {/* Wrap ProductPosts in a container */}
                        <ProductContainer>
                            <ProductPost />
                            <ProductPost />
                            <ProductPost />
                            <ProductPost />
                            <ProductPost />
                            <ProductPost />
                            <ProductPost />
                        </ProductContainer>
                    </SellingItem>
                </UserItem>
            </StylingLobby>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vw;
`;

const UserItem = styled.div`
    width: 100%;
    min-height: 441px;
    flex-shrink: 0;
    position: relative;
    top: 496px;
`;

const SellingItemTitle = styled.div`
    color: #fff;
    font-family: "Hakgyoansim Wooju";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    left: 163px;
`;

const SellingItem = styled.div`
    /* display: flex; 
    justify-content: space-between; */
    margin: 0px 128px;
    position: relative;
    top: 64px;
`;

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 90px;
    justify-items: center;
`;

export default MyPage;
