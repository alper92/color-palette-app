import { styled } from "styled-components";
import ColorPickerForm from "../components/ColorPickerForm";
import Preview from "../components/Preview";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState({
    primary: "#EEEEEE",
    secondary: "#4E4FEB",
    tertiary: "#068FFF",
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
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    min-width: 400px;
  }
`;
