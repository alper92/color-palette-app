import { styled } from "styled-components";
import ColorPickerForm from "../components/ColorPickerForm";
import Preview from "../components/Preview";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState({
    primary: "#ff00ff",
    secondary: "#ffffff",
    tertiary: "#000000",
  });
  return (
    <Grid>
      <ColorPickerForm theme={theme} setTheme={setTheme} />
      <Preview theme={theme} />
    </Grid>
  );
}

const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;
`;
