import { styled } from "styled-components";
import Button from "./StyledButton";

export default function CardPreview() {
  return (
    <Card>
      <h3>Title</h3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Paragraph>
      <Button>Button</Button>
      <ButtonHover>Hover Color</ButtonHover>
    </Card>
  );
}

const Card = styled.article`
  padding: 1rem;
  background-color: var(--primary);
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const ButtonHover = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: var(--tertiary);
  color: var(--primary);
`;
