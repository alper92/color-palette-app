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
      <Board>
        {clipboardValue}
        <Button onClick={handleClipboardValue} theme={theme}>
          {toggle ? "copy code" : "copied!"}
        </Button>
      </Board>
    </>
  );
}

const Board = styled.pre`
  padding: 0.5rem;
  font-size: 1.2rem;
  font-style: italic;
  color: grey;
  background-color: rgb(40, 44, 52);
  border-radius: 5px;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.secondary};
  top: 10px;
  right: 10px;
  font-size: 1rem;
  border: none;
  color: white;
  font-weight: bolder;
  padding: 0.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
