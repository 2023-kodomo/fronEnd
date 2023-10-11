import React from "react";
import styled from "styled-components";
import Header from "../components/HeaderComponent";
import StylingLobby from "../components/stylingLobby";
import ProductPost from "../components/product";
import UserInfo from "../components/MyPage/User";

const MyPage = () => {
    const user = {
        id: "사용자 아이디",
        name: "사용자 이름",
        email: "사용자 이메일",
        products: [
            {
                title: "상품 제목",
                content: "상품 설명",
                price: "1000",
                image: "",
                uploadDate: "2023-00-00T00:00:00.000+00:00",
            },
            {
                title: "상품 제목",
                content: "상품 설명",
                price: "1000",
                image: "",
                uploadDate: "2023-00-00T00:00:00.000+00:00",
            },
        ],
    };

    const productBundle = (products) => {
        console.log(products);
        const Product = products.map((product, i) => (
            <ProductPost
                title={product.title}
                price={product.price}
                image={product.image}
                key={i}
            />
        ));
        return Product;
    };

    return (
        <Container>
            <Header />
            <StylingLobby>
                <UserInfo user={user} />
                <UserItem>
                    <SellingItemTitle>내가 팔고 있는 물건</SellingItemTitle>
                    <SellingItem>
                        <ProductContainer>
                            {productBundle(user.products)}
                        </ProductContainer>
                    </SellingItem>
                </UserItem>
            </StylingLobby>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    min-height:100vw;
`;

const UserItem = styled.div`
    width: 100%;
    min-height: 100px;
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
