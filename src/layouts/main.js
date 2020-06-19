import React from "react";
import styled from "styled-components";

export function MainLayout(props) {
  const { children } = props;
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  padding: 0px 20px;
  width: 1440px;
  max-width: 100%;
  margin: auto;

  @media all and (max-width: 767px) {
    padding: 0px 10px;
  }
`;
