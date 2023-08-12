import { styled } from "styled-components";

export default function Preview({ theme }) {
  return (
    <Wrapper theme={theme}>
      <h2>Preview</h2>
      <span>
        <PreviewButton>Preview 1</PreviewButton>
        <PreviewButton>Preview 2</PreviewButton>
        <PreviewButton>Preview 3</PreviewButton>
      </span>
      <Card>
        <h3>Title</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Button>Button</Button>
        <ButtonHover>Hover Color</ButtonHover>
      </Card>
      {/* <Card>
        <h3>Title</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Button>Button</Button>
        <ButtonHover>Hover Color</ButtonHover>
      </Card>
       <Card>
        <h3>Title</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Button>Button</Button>
        <ButtonHover>Hover Color</ButtonHover>
      </Card> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: fit-content;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  --primary: ${({ theme }) => theme.primary};
  --secondary: ${({ theme }) => theme.secondary};
  --tertiary: ${({ theme }) => theme.tertiary};
`;

const PreviewButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 12px 17px;
  border-radius: 50px;
  background-color: #2222220d;
  color: #222;
  margin: 0 0.5rem 0.5rem 0;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const Card = styled.article`
  padding: 1rem;
  background-color: var(--primary);
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: var(--secondary);
  color: var(--primary);
  margin: 0 1rem 0.5rem 0;
  &:hover {
    background-color: var(--tertiary);
  }
`;

const ButtonHover = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: var(--tertiary);
  color: var(--primary);
`;
