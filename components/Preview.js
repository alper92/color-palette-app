import { styled } from "styled-components";

export default function Preview({ theme }) {
  return (
    <Wrapper theme={theme}>
      <h2>Preview</h2>
      <Card>
        <h3>Title</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card>
      <Card>
        <h3>Title</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card>
      <Card>
        <h3>Title</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  --primary: ${({ theme }) => theme.primary};
  --secondary: ${({ theme }) => theme.secondary};
  --tertiary: ${({ theme }) => theme.tertiary};
  background-color: var(--primary);
  border: 1px solid black;
`;

const Card = styled.article`
  padding: 1rem;
  background-color: var(--secondary);
  margin: 1rem;
`;

const Paragraph = styled.p`
  background-color: var(--tertiary);
`;
