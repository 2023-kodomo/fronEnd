import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MyQRCode } from "./MyQRCode/MyQRCode";
import MyPageAPI from "../../utils/api/MyPageAPI";

const User = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [selImg, setselIng] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const imgRef = useRef();
  const closeModal = () => {
    setShowModal(false);
    setShowTooltip(false);
  };

  useEffect(() => {
    (async function getUserInfo() {
      const result = await MyPageAPI();
      setUserInfo(result.myName);
      console.log(UserInfo);
      if (result.myImg) {
        setselIng(result.myImg);
      }
    })();
  }, []);

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setselIng(reader.result);
      };
    }
  };

  return (
    <UserInfo
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <UserImgContainer>
        <UserImg src={selImg} alt="UserImg" />
        {showTooltip && (
          <>
            <HoverShow
              onClick={() => {
                imgRef.current.click();
              }}
            >
              이미지 변경
              <InputFile
                type="file"
                accept="image/*"
                onChange={saveImgFile}
                ref={imgRef}
              />
            </HoverShow>
            <HoverQRCode
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              내 QR코드
            </HoverQRCode>
            <HoverLine />
          </>
        )}
        {showModal && <MyQRCode closeModal={closeModal} />}
      </UserImgContainer>
      {userInfo && <UserName>{userInfo}</UserName>}
    </UserInfo>
  );
};

const UserInfo = styled.div`
  width: 353px;
  height: 200px;
  position: relative;
  top: 224px;
  left: 128px;
`;

const UserImgContainer = styled.div`
  width: 200px;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
`;

const HoverShow = styled.div`
  width: 200px;
  height: 102px;
  display: grid;
  align-items: center;
  text-align: center;
  border-radius: 100px 100px 0px 0px;
  position: absolute;
  bottom: 97px;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${UserImgContainer}:hover & {
    opacity: 1;
  }
`;

const HoverLine = styled.hr`
  position: relative;
  bottom: 110px;
  border: none;
  border-top: 1px solid black;
`;

const HoverQRCode = styled.div`
  width: 200px;
  height: 97px;
  border-radius: 0px 0px 100px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 103px;
`;

const InputFile = styled.input`
  display: none;
`;

const UserImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  box-shadow: 0px 0px 25px 16px rgba(0, 0, 0, 0.25);
`;

const UserName = styled.div`
  min-width: 120px;
  height: 40px;
  white-space: nowrap;
  color: #fff;
  font-family: Hakgyoansim Wooju;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  left: 252px;
  bottom: 81px;
`;

export default User;
