import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";

export default function ColorPickerForm({ theme, setTheme }) {
  return (
    <Wrapper>
      <h2>Select colors:</h2>
      <ColorPicker
        color={theme.primary}
        onChoose={(newValue) => {
          setTheme({ ...theme, primary: newValue });
        }}
        name="primary"
      />
      <ColorPicker
        color={theme.secondary}
        onChoose={(newValue) => {
          setTheme({ ...theme, secondary: newValue });
        }}
        name="secondary"
      />
      <ColorPicker
        color={theme.tertiary}
        onChoose={(newValue) => {
          setTheme({ ...theme, tertiary: newValue });
        }}
        name="tertiary"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
