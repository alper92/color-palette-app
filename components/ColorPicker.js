import { styled } from "styled-components";

export default function ColorPicker({ name, onChoose, color }) {
  return (
    <Wrapper>
      <label htmlFor="color-picker">{name}</label>
      <InputColorSelector
        type="color"
        id="color-picker"
        name="color-picker"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
      />

      <label htmlFor="color-input"></label>
      <InputColorSelector
        type="text"
        id="color-input"
        name="color-input"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
        disabled
      />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const InputColorSelector = styled.input`
  width: auto;
`;
