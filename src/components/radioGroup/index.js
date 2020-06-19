import React from "react";
import styled from "styled-components";

export function RadioGroupComponent(props) {
  const { answers, currentQuestionValue, changeHandler } = props;

  return (
    <div>
      <div>
        {answers.map((item, index) => {
          return (
            <RadioWrapper key={`${item.name}/${index}`}>
              <RadioInput
                onChange={changeHandler}
                type="radio"
                checked={item.name === currentQuestionValue}
                id={item.id}
                value={item.name}
              />
              <RadioLabel htmlFor={item.id}>{item.labelText}</RadioLabel>
            </RadioWrapper>
          );
        })}
      </div>
    </div>
  );
}

const RadioWrapper = styled.div`
  min-height: 30px;
  height: 100%;
  display: flex;
`;

const RadioInput = styled.input`
  width: 22px;
  height: 22px;
  background: #fafafa;
  border: 1px solid #000000;
`;

const RadioLabel = styled.label`
  padding: 3px 0px;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 7px;
`;
