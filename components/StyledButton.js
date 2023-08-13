import { styled } from "styled-components";

export default function StyledButton({ children }) {
  return <Button>{children}</Button>;
}

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
