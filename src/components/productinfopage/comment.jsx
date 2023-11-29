import React from "react";
import styled from "styled-components";
import delComment from "../../utils/api/delComment";

const Comment = ({ id, content, user, createdDate, update }) => {
  const delButtonClickHandler = async () => {
    await delComment(id);
    update(true);
  };

  return (
    <Container>
      <FlexContainer>
        <UserName>{user.name}</UserName>
        <CreateDate>{createdDate}</CreateDate>
        {localStorage.getItem("userId") === user.id && (
          <DelButton onClick={delButtonClickHandler}>삭제</DelButton>
        )}
      </FlexContainer>
      <hr />
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 15px;
  width: 87%;
  background: #d0d0d0;
  position: relative;
  margin-top: 43px;
  hr {
    background: #181738;
    height: 1px;
    border: 0;
    margin: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const UserName = styled.span`
  color: #000;
  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  flex-grow: 1;
`;

const DelButton = styled.button`
  margin-left: 18px;
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  background: var(--mainbluelightblue-1, #726eff);
  width: 92px;
  height: 28px;
  flex-shrink: 0;
  color: #d9d9d9;
  cursor: pointer;
  &:hover {
    background-color: #9592ff;
  }
`;

const CreateDate = styled.span`
  color: #000;
  font-family: Hakgyoansim Wooju;
  font-size: 16px;
  text-align: center;
`;

const Content = styled.p`
  color: #000;
  font-family: Hakgyoansim Wooju;
  font-size: 20px;
  margin: 0px;
  padding: 8px 1em;
  white-space: pre-wrap;
`;

export default Comment;
