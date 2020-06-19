import React from "react";
import styled from "styled-components";
import { ProgressbarComponent } from "../progressbar";

export function BlockQuizComponent(props) {
  const { children, progressData } = props;

  return (
    <Wrapper>
      <Header>
        <Title>Большой заголовок, что-то обозначающий</Title>
        <Subtitle>
          Небольшой заголовок, небольшими буквами, в&nbsp;котором что-то
          неважное
        </Subtitle>
      </Header>
      <Content>
        <ProgressbarComponent data={progressData} />
        {children}
        <HintText>
          Просто текст, подпись к&nbsp;данному квизу, чтобы было понятно, что
          человек его проходит и&nbsp;в&nbsp;конце что-то получит. Просто его
          надо разместить здесь, потому что &laquo;заказчику так надо&raquo;
        </HintText>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;

  @media all and (max-width: 767px) {
    padding: 50px 0;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;

  @media all and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

const Content = styled.div`
  width: 820px;
  max-width: 100%;
`;

const Title = styled.h1``;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  @media all and (max-width: 767px) {
    font-size: 11px;
    line-height: 13px;
  }
`;

const HintText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  font-weight: 300;
  margin: 20px 0;

  @media all and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
    margin: 10px 0;
  }
`;
