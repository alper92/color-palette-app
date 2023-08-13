import { styled } from "styled-components";

export default function ColorPicker({ name, onChoose, color }) {
  return (
    <Wrapper>
      <label htmlFor="color-picker">{name}</label>
      <InputColorSelector
        aria-label="select a color"
        type="color"
        id="color-picker"
        name="color-picker"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
      />

      <label htmlFor="color-input"></label>
      <InputColorSelector
        aria-label="type in a hex color in hex"
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
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const InputColorSelector = styled.input`
  width: auto;
  height: 2rem;
  text-align: center;
  border: none;
  background-color: transparent;
`;
