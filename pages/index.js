import { styled } from "styled-components";
import ColorPickerForm from "../components/ColorPickerForm";
import Preview from "../components/Preview";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [theme, setTheme] = useState({
    primary: "#EEEEEE",
    secondary: "#673AB7",
    tertiary: "#4D2D86",
  });
  return (
    <Grid>
      <Head>
        <title>Color Palette App</title>
      </Head>
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
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }
`;
