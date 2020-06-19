import React from "react";
import styled from "styled-components";

function isNotCorrect(value, total) {
  return value > total || value < 0 || total < 0 || total === 0;
}

export function ProgressbarComponent(props) {
  const {
    data: { total = 0, value = 0 }
  } = props;

  if (isNotCorrect(value, total)) return null;

  return (
    <Bar>
      <Line style={{ width: (100 * value) / total + "%" }} />
    </Bar>
  );
}

const Bar = styled.div`
  background: #ffffff;
  box-shadow: inset 0 0 0 1px #b5b5b5;
  border-radius: 10px;
  width: 100%;
  height: 14px;
  position: relative;
  margin-bottom: 15px;

  @media all and (max-width: 767px) {
    margin-bottom: 22px;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  background: #ff0000;
  border-radius: 10px;
`;
