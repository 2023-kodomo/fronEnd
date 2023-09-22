import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/header";

const PostingPage = () => {
    return (
        <>
            <Container>
                <Header />
                <StylingLobby></StylingLobby>
                <PostingFrame>
                    <ImgBox>
                        <ImgSpan>
                            물품 사진 ※ 사진은 한 장만 넣을 수 있습니다
                        </ImgSpan>
                        <PostingImg />
                        <ButtonCase>
                            <ImgDelete>삭제</ImgDelete>
                            <ImgInsert>삽입</ImgInsert>
                        </ButtonCase>
                    </ImgBox>
                    <PostingForm>
                        <PostingField>
                            <AlignUl>
                                <PostingLi>
                                    <ProductLabel>상품명</ProductLabel>
                                    <ProductName
                                        type="text"
                                        placeholder="상품명 입력"
                                        required
                                    />
                                </PostingLi>
                                <PostingLi>
                                    <ProductLabel>상품 설명</ProductLabel>
                                    <ProductExplain
                                        rows={4}
                                        placeholder="상품 설명 입력"
                                        required
                                    ></ProductExplain>
                                </PostingLi>
                                <PostingLi>
                                    <ProductLabel>가격</ProductLabel>
                                    <ProductPrice type="text" required />
                                </PostingLi>
                                <PostingLi>
                                    <ProductLabel>시간</ProductLabel>
                                    <TransactionAppointmentTime
                                        type="text"
                                        required
                                    />
                                </PostingLi>
                                <PostingLi>
                                    <ProductLabel>장소</ProductLabel>
                                    <TradingPlace type="text" required />
                                </PostingLi>
                            </AlignUl>
                            <ConfirmButtonCase>
                                <PostingCancel>취소</PostingCancel>
                                <PostingConfirm>게시</PostingConfirm>
                            </ConfirmButtonCase>
                        </PostingField>
                    </PostingForm>
                </PostingFrame>
            </Container>
        </>
    );
};

const fadeIn = keyframes`
    0% {
        transform: translateY(-64px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Container = styled.main`
    width: 100vw;
`;

const StylingLobby = styled.div`
    height: 830px;
    background-image: url("./wave.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    position: sticky;
    top: -386px;
    display: flex;
`;

const PostingFrame = styled.div`
    display: flex;
    width: 1349px;
    height: 451px;
    background-color: rgba(6, 5, 39, 0.5);
    padding: 76px;
    border-radius: 16px;
    position: fixed;
    top: 210px;
    right: 213.5px;
    animation: ${fadeIn} 1s;
`;

const ImgBox = styled.div`
    display: block;
    width: 378px;
    height: 451px;
    margin-right: 38px;
`;

const ImgSpan = styled.span`
    display: block;
    margin: 37px 39px 0px 39px;
    color: white;
    text-align: left;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const PostingImg = styled.img`
    width: 300px;
    height: 300px;
    margin: 10px 39px 0px 39px;
`;

const ButtonCase = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 39px 37px 39px;
`;

const ConfirmButtonCase = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 55px;
`;

const ImgInsert = styled.button`
    width: 78px;
    height: 26px;
    border-radius: 8px;
    background-color: #f6f6f6;
    color: black;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
    margin-left: 10px;
`;

const ImgDelete = styled.button`
    width: 78px;
    height: 26px;
    border-radius: 8px;
    background-color: #f6f6f6;
    color: black;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
    margin-left: 10px;
`;

const PostingForm = styled.form`
    display: block;
    width: 868px;
    height: 451px;
`;

const PostingField = styled.fieldset`
    display: block;
    width: 867px;
    height: 450px;
    border-style: none;
    margin: 0px;
    padding: 0px;
`;

const AlignUl = styled.ul`
    background-color: rgba(0, 0, 0, 0);
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

const PostingLi = styled.li`
    display: flex;
    align-items: center;
    margin: 0px 0px 15px;
    padding: 0px;
    color: white;
    text-align: left;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
`;

const ProductLabel = styled.label`
    display: inline-block;
    text-align: left;
    align-items: center;
    margin-left: 61px;
    width: 180px;
    color: white;
    text-align: left;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const ProductName = styled.input`
    width: 567px;
    height: 45px;
    background-color: #e2ddff;
    border-style: none;
    text-align: center;
    font-size: 28px;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
`;

const ProductExplain = styled.textarea`
    width: 539px;
    height: 96px;
    background-color: #e2ddff;
    border-style: none;
    padding: 16px;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
`;

const ProductPrice = styled.input`
    width: 567px;
    height: 50px;
    background-color: #e2ddff;
    border-style: none;
    text-align: center;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
`;

const TransactionAppointmentTime = styled.input`
    width: 567px;
    height: 50px;
    background-color: #e2ddff;
    border-style: none;
    text-align: center;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
`;

const TradingPlace = styled.input`
    width: 567px;
    height: 50px;
    background-color: #e2ddff;
    border-style: none;
    text-align: center;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
`;

const PostingCancel = styled.button`
    width: 160px;
    height: 42px;
    border-radius: 16px;
    border: 3px solid #ca2810;
    background-color: #7a6ccf;
    color: white;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
    margin-left: 17px;
`;

const PostingConfirm = styled.button`
    width: 160px;
    height: 42px;
    border-radius: 16px;
    border: 3px solid #3fca10;
    background-color: #c0b7fa;
    color: black;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Hakgyoansim Wooju";
    margin-left: 17px;
`;

/* background-color: #ca2810;
background-color: #3fca10;
*/

export default PostingPage;
