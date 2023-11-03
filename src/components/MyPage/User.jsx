import React, { useState, useRef } from "react";
import styled from "styled-components";

const UserInfo = (props) => {
  let userName = /*"user.name"*/ "테스트입니다."; //임시 닉네임
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
          src={selectedImage ? selectedImage : "./img/BasicProfile.svg"}
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
  );
};

const User = styled.div`
  width: 353px;
  height: 200px;
  position: relative;
  top: 224px;
  left: 128px;
`;

const UserImgContainer = styled.div`
  width: 200px;
  position: absolute;
  border-radius: 200px;
`;

const UserImgBlind = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: black;
  display: none;
  &:hover {
    cursor: pointer;
    opacity: 0.2;
  }
`;

const HoverShow = styled.div`
  position: absolute;
  bottom: 90px;
  left: 57px;
  &:hover {
    pointer-events: none;
  }
`;

const UserImg = styled.img`
  // 사진이 올라오는 효과를 넣을 것
  width: 200px;
  height: 200px;
  border-radius: 200px;
  transition: filter 0.3s ease;
  z-index: 50;
  &:hover {
    cursor: pointer;
  }
`;

const InputFile = styled.input`
  display: none;
`;

const UserName = styled.div`
  // 닉네임이 올라오는 효과를 넣을 것
  display: inline-block;
  width: 1000px; // 임시
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

export default UserInfo;
