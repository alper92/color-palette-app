import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";
import Clipboard from "./Clipboard";
import { CirclePicker, SliderPicker } from "react-color";

export default function ColorPickerForm({ theme, setTheme }) {
  function handleChangeCompleteSecondary(color) {
    setTheme({
      ...theme,
      secondary: color.hex,
      tertiary: color.hex,
    });
  }
  function handleChangeCompleteTertiary(color) {
    setTheme({
      ...theme,
      tertiary: color.hex,
    });
  }

  return (
    <Wrapper>
      <h2>Select</h2>
      <ColorPicker
        color={theme.primary}
        onChoose={(newValue) => {
          setTheme({ ...theme, primary: newValue });
        }}
        name="primary color"
      />
      <Divider />
      <ColorPicker
        color={theme.secondary}
        onChoose={(newValue) => {
          setTheme({ ...theme, secondary: newValue });
        }}
        name="secondary color"
      />
      <CirclePicker
        width="auto"
        color={theme.secondary}
        onChangeComplete={handleChangeCompleteSecondary}
      />
      <Divider />
      <ColorPicker
        color={theme.tertiary}
        onChoose={(newValue) => {
          setTheme({ ...theme, tertiary: newValue });
        }}
        name="tertiary color"
      />
      <StyledSliderPicker
        width="auto"
        color={theme.tertiary}
        onChange={handleChangeCompleteTertiary}
      />
      <Divider />
      <Clipboard theme={theme} />
    </Wrapper>
  );
}

// hide the horizontal hue bar from react colors
const StyledSliderPicker = styled(SliderPicker)`
  .hue-horizontal {
    display: none;
  }
  margin-top: -2rem;
`;

const Wrapper = styled.section`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Divider = styled.hr`
  border: none;
  margin: 0rem 0 0.5rem 0;
  height: 3px;
  position: relative;
  width: 100%;
  background: radial-gradient(
    ellipse farthest-side at top center,
    rgba(0, 0, 0, 0.4),
    transparent
  );
`;
