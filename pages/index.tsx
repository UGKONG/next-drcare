import React from "react";
import Styled from "styled-components";
import Header from "../components/Header";

const HomeApp = () => {
  return (
    <>
      <Header />
      <Container>대시보드</Container>
    </>
  );
};

export default HomeApp;

const Container = Styled.main`
  
`;
