import { styled } from "styled-components";
import ColorPickerForm from "../components/ColorPickerForm";
import Preview from "../components/Preview";

export default function Home() {
  return (
    <Grid>
      <ColorPickerForm />
      <Preview />
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
