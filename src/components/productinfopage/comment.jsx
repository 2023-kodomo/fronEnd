import React from "react";
import styled from "styled-components";

const Comment = (props) => {
  console.log(props);
  return (
    <Container>
      <FlexContainer>
        <UserName>{props.user.name}</UserName>
        <CreateDate>{props.createdDate}</CreateDate>
      </FlexContainer>
      <hr />
      <Content>{props.content}</Content>
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
  padding: 1% 2%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const UserName = styled.span`
  color: #000;
  font-family: Hakgyoansim Wooju;
  font-size: 16px;
`;

const CreateDate = styled.span`
  color: #000;
  font-family: Hakgyoansim Wooju;
  font-size: 16px;
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
