import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";
import Clipboard from "./Clipboard";

export default function ColorPickerForm({ theme, setTheme }) {
  return (
    <Wrapper>
      <h2>Select colors</h2>
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
      <Clipboard theme={theme} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
