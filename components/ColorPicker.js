import { useState } from "react";
import { styled } from "styled-components";

export default function ColorPicker({ name, onChoose, color }) {
  return (
    <Wrapper chosenColor={color}>
      <label htmlFor="color-picker">{name}</label>
      <input
        type="color"
        id="color-picker"
        name="color-picker"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
      />

      <label htmlFor="color-input"></label>
      <input
        type="text"
        id="color-input"
        name="color-input"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  background-color: ${({ chosenColor }) => chosenColor};
  width: 100%;
`;
