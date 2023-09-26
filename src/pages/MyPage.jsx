import React, { useState, useRef } from "react";
import styled from "styled-components";
import Header from "../components/header";
import StylingLobby from "../components/stylingLobby";
import ProductPost from "../components/product";

const MyPage = (user) => {
    let userName = "WOW"; //임시 닉네임
    const [showTooltip, setShowTooltip] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const imgRef = useRef();

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
        }
    };

    return (
        <Container>
            <Header />
            <StylingLobby>
                <User>
                    <UserImgContainer
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        onClick={() => {
                            // 클릭 시 파일 선택 다이얼로그 열기
                            imgRef.current.click();
                        }}
                    >
                        <UserImgBlind></UserImgBlind>
                        <UserImg
                            src={
                                selectedImage
                                    ? selectedImage
                                    : "./img/BasicProfile.svg"
                            }
                            alt="UserImage"
                        />
                        {showTooltip && <HoverShow>이미지 변경</HoverShow>}
                    </UserImgContainer>
                    <InputFile
                        type="file"
                        id="profile-image-input"
                        accept="image/*"
                        onChange={saveImgFile}
                        ref={imgRef}
                    />
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

const InputFile = styled.input`
    display: none;
`;

const UserImgContainer = styled.div`
    width: 200px;
    position: absolute;
    border-radius: 200px;
`;

const UserImgBlind = styled.div`
    width:200px;
    height:200px;
    display:none;
    &:hover{
        cursor:pointer
    }
`

const HoverShow = styled.div`
    position: absolute;
    bottom: 90px;
    left: 57px;
    &:hover {
        pointer-events: none;
    }
`;

const UserImg = styled.img`
    width: 200px;
    height:200px;
    border-radius: 200px;
    transition: filter 0.3s ease;
    z-index: 10;
    &:hover {
        cursor: pointer;
    }
`;

const UserName = styled.div`
    display: inline-block;
    width: 1000px;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 83px;
    position: relative;
    left: 128px;
    justify-content: flex-start;
`;

export default MyPage;
