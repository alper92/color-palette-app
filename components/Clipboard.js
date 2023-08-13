import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Clipboard({ theme }) {
  const [copy, setCopy] = useState(true);

  const clipboardValue = `:root {
  --primary-color: ${theme.primary};
  --secondary-color: ${theme.secondary};
  --tertiary-color: ${theme.tertiary};
}`;

  function handleClipboardValue() {
    navigator.clipboard.writeText(clipboardValue);
    setCopy(!copy);
  }

  useEffect(() => {
    if (!copy) {
      const timeOut = setTimeout(() => {
        setCopy(true);
      }, 3000);

      return () => clearTimeout(timeOut);
    }
  }, [copy]);

  return (
    <Board theme={theme}>
      {clipboardValue}
      <ClipboardButton onClick={handleClipboardValue} theme={theme}>
        {copy ? (
          <FontAwesomeIcon icon={faCopy} />
        ) : (
          <FontAwesomeIcon icon={faCheck} />
        )}
      </ClipboardButton>
    </Board>
  );
}

const Board = styled.pre`
  position: relative;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-style: italic;
  font-family: "Courier New";
  color: white;
  background-color: rgb(40, 44, 52);
  border-radius: 5px;
  border: solid 2px ${({ theme }) => theme.secondary};
  @media (max-width: 850px) {
    font-size: 0.5rem;
  }
`;

const ClipboardButton = styled.button`
  position: absolute;
  font-size: 1rem;
  margin: 0.2rem;
  top: 0;
  right: 0;
  color: white;
  border: none;
  background-color: transparent;
`;
