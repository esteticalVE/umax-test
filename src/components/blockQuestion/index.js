import React from "react";
import styled from "styled-components";

export function BlockQuestionComponent(props) {
  const {
    data: { title, subtitle } = "",
    resetHandler,
    nextQuestionHandler,
    prevQuestionHandler,
    submitHandler,
    withForm,
    children
  } = props;

  return (
    <Wrapper>
      <Left>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Body>{children}</Body>
        <ButtonContainer>
          <Button onClick={resetHandler}>Начать сначала</Button>
          <Button onClick={prevQuestionHandler}>Предыдущий вопрос</Button>
          {withForm ? (
            <Button onClick={submitHandler}>Отправить</Button>
          ) : (
            <Button onClick={nextQuestionHandler}>Следующий вопрос</Button>
          )}
        </ButtonContainer>
      </Left>
      <Right>
        <ImageWrapper>
          <img src="https://picsum.photos/220/295" width="220px" />
        </ImageWrapper>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 25px 30px 35px;
  background: transparent;
  border: 1px solid #b5b5b5;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 767px) {
    padding: 37px 11px;
    margin: 0 -10px;
    border-radius: 10px;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 5px;

  @media all and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

const Subtitle = styled.h4`
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  @media all and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const Header = styled.div`
  min-height: 82px;
  margin-bottom: 15px;

  @media all and (max-width: 767px) {
    min-height: 0;
    margin-bottom: 30px;
  }
`;

const Body = styled.div`
  margin-bottom: 15px;
`;

const Left = styled.div`
  width: 65%;
  position: relative;
  padding-bottom: 44px;

  @media all and (max-width: 799px) {
    width: 100%;
  }
`;

const Right = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  @media all and (max-width: 320px) {
    position: relative;
    flex-direction: column;
    button {
      width: 120px;
      margin: 10px 0px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 220px;
  height: 295px;
  background: #cdcdcd;

  img {
    max-width: 100%;
  }

  @media all and (max-width: 799px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 4px 10px;
  width: 122px;
  height: 44px;
  font-family: Roboto, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background: #fafafa;
  border: 1px solid #b5b5b5;
  box-sizing: border-box;
  border-radius: 15px;
  color: #000000;
  outline: none;
  cursor: pointer;
  margin: 0 5px;
  width: 100%;

  &:hover {
    background: #f1f1f1;
  }

  &:first-child {
    margin-left: 0;
    min-width: 120px;
    width: 120px;
  }

  &:last-child {
    margin-right: 0;
  }

  @media all and (max-width: 767px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
`;
