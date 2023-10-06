import React from "react";
import styled from "styled-components";

const StylingLobby = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: 77vh;
  background-image: url("./wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  position: sticky;
  top: -386px;
  display: flex;
`;

export default StylingLobby;
