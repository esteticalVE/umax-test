import React from "react";
import styled from "styled-components";

export function BlockFormComponent(props) {
  const { formData, onChange, isChecked, isAgreeToggle } = props;

  return (
    <form>
      <FieldWrapper>
        <Label htmlFor="name">Ваше имя</Label>
        <Input name="name" value={formData.name} onChange={onChange} />
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor="phone">Ваш телефон</Label>
        <Input name="phone" value={formData.phone} onChange={onChange} />
      </FieldWrapper>
      <FieldWrapper>
        <input
          type="checkbox"
          onChange={isAgreeToggle}
          checked={isChecked}
          value={isChecked}
          id="isAgree"
        />
        <RadioLabel htmlFor="isAgree">
          Я даю согласие на обработку своих персональных данных
        </RadioLabel>
      </FieldWrapper>
    </form>
  );
}

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;

const Input = styled.input`
  width: 290px;
  height: 32px;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  outline: none;
  padding: 0px 9px;
`;

const Label = styled.label`
  margin: 0px 0px 3px 7px;
`;

const RadioLabel = styled.label`
  margin: 7px 0px 3px 7px;
  padding: 5px;
  font-weight: 200;
  font-size: 13px;
`;
