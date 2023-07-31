import { styled } from "styled-components";

export default function Preview({ theme }) {
  return (
    <Wrapper theme={theme}>
      <h2>Preview</h2>
      <Card>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>Button</Button>
        <ButtonHover>Hover Color</ButtonHover>
      </Card>
      <Card>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>Button</Button>
        <ButtonHover>Hover Color</ButtonHover>
      </Card>
      <Card>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>Button</Button>
        <ButtonHover>Hover Color</ButtonHover>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  --primary: ${({ theme }) => theme.primary};
  --secondary: ${({ theme }) => theme.secondary};
  --tertiary: ${({ theme }) => theme.tertiary};
`;

const Card = styled.article`
  padding: 1rem;
  background-color: var(--primary);
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--secondary);
  color: var(--primary);
  margin: 1rem 1rem 1rem 0;
  &:hover {
    background-color: var(--tertiary);
  }
`;

const ButtonHover = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: var(--tertiary);
  color: var(--primary);
`;
