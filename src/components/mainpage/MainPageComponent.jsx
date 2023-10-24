import React from "react";
import styled, { keyframes } from "styled-components";
import ProductPost from "../product";
import Header from "../HeaderComponent";
import StylingLobby from "../stylingLobby";

const MainPageComponent = () => {
  const products = [
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "코로나를 팝니다",
      content: "내용",
      price: 19690,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "리액트 가져가세요",
      content: "내용",
      price: 0,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "일렉트론 처리합니다",
      content: "내용",
      price: 1000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "박지민 처리시 사례금",
      content: "내용",
      price: 0,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "숲속에 박지민 공주",
      content: "내용",
      price: 1000000000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "귀여운 티모 팝니다",
      content: "내용",
      price: 999999999999,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "카카오 주식 살거면 사셈",
      content: "내용",
      price: 48950,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "슈렉 팝니다",
      content: "내용",
      price: 99000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "피에로 팝니다",
      content: "내용",
      price: 999900,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "회전목마 팝니다",
      content: "내용",
      price: 2800000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "NEXt.js 팝니다",
      content: "내용",
      price: 100,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "헤드셋 + 토끼 세트",
      content: "내용",
      price: 1956800400,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "2000원 팝니다",
      content: "내용",
      price: 2000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "바이러스 팝니다",
      content: "내용",
      price: 200,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "키클롭스",
      content: "내용",
      price: 34567800,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "LG 주식 어떤데",
      content: "내용",
      price: 33000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "아이폰",
      content: "내용",
      price: 2013000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "빌 게이츠와 식사권",
      content: "내용",
      price: 23789678900,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "뜨끈한 김치찌개",
      content: "내용",
      price: 8000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "비염약",
      content: "내용",
      price: 5000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "대마고 노트북",
      content: "내용",
      price: 500,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "파리채",
      content: "내용",
      price: 2300,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "양말",
      content: "내용",
      price: 1000,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
    {
      seller: {
        id: "65050fd6f44ec167c78c572e",
        email: "test@gmail.com",
        name: "테스트",
      },
      title: "시간을 팝니다",
      content: "내용",
      price: 56500,
      image: "",
      uploadDate: "2023-09-16T02:18:09.038+00:00",
      comment: [
        {
          writer: {
            id: "65050fd6f44ec167c78c572e",
            email: "test@gmail.com",
            name: "테스트",
          },
          content: "댓글",
          createdDate: "2023-09-16T02:24:44.241+00:00",
        },
      ],
    },
  ];

  const productSet = (products) => {
    const datas = products.map((e, i) => {
      return (
        <ProductPost title={e.title} price={e.price} image={e.image} key={i} />
      );
    });
    return datas;
  };

  return (
    <Container>
      <Header page={0} />
      <StylingLobby>
        <SmallText>대마고 전용 중고거래 사이트</SmallText>
        <Logo>대팔이</Logo>
      </StylingLobby>
      <GrowContainer>{productSet(products)}</GrowContainer>
    </Container>
  );
};

const fadeIn = keyframes`
    0% {
        transform: translateX(-64px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const Container = styled.main`
  width: 100vw;
`;

// const StylingLobby = styled.div`
//   height: 830px;
//   background-image: url("./wave.svg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position-y: bottom;
//   position: sticky;
//   top: -386px;
//   display: flex;
// `;

const SmallText = styled.span`
  color: white;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  animation: ${fadeIn} 2s;
  position: absolute;
  top: 308px;
  left: 15.6vw;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1700px) {
    font-size: 57.6px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 51.2px;
  }

  @media screen and (max-width: 1350px) {
    font-size: 38.4px;
  }
`;

const Logo = styled.span`
  color: #fff;
  text-align: center;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  animation: ${fadeIn} 2s;
  position: absolute;
  top: 276px;
  right: 23.4vw;
  font-family: "Hakgyoansim Wooju";
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1700px) {
    font-size: 115.2px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 102.4px;
  }

  @media screen and (max-width: 1350px) {
    font-size: 76.8px;
  }
`;

const GrowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: auto;
  row-gap: 90px; /* 세로 간격을 90px로 설정 */
  margin-left: 128px; /* 좌측 여백 128px */
  margin-right: 128px; /* 우측 여백 128px */
  justify-items: center;
  position: relative;
  top: -230px;

  @media screen and (max-width: 1700px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 64px;
    margin-right: 64px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default MainPageComponent;
