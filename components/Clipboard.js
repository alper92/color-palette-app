import { useState } from "react";
import { styled } from "styled-components";

export default function Clipboard({ theme }) {
  const [toggle, setToggle] = useState(true);

  const clipboardValue = `:root {
  --primary-color: ${theme.primary};
  --secondary-color: ${theme.secondary};
  --tertiary-color: ${theme.tertiary};
}`;

  function handleClipboardValue() {
    navigator.clipboard.writeText(clipboardValue);
    setToggle(!toggle);
  }

  return (
    <>
      <Button onClick={handleClipboardValue} theme={theme}>
        {toggle ? "copy code" : "copied!"}
      </Button>
      <Board theme={theme}>{clipboardValue}</Board>
    </>
  );
}

const Board = styled.pre`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-style: italic;
  font-family: "Courier New";
  color: grey;
  background-color: rgb(40, 44, 52);
  border-radius: 5px;
  border: solid 2px ${({ theme }) => theme.secondary};
  @media (max-width: 850px) {
    font-size: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  font-size: 0.8rem;
  text-transform: uppercase;
  border: none;
  color: white;
  font-weight: bolder;
  padding: 0.4rem;
  border-radius: 5px;
  cursor: pointer;
`;
