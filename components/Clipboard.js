import { styled } from "styled-components";

export default function Clipboard({ theme }) {
  const clipboardValue = `:root {
  --primary-color: ${theme.primary};
  --secondary-color: ${theme.secondary};
  --tertiary-color: ${theme.tertiary};
}`;

  function handleClipboardValue() {
    navigator.clipboard.writeText(clipboardValue);
  }

  return (
    <>
      <Board>
        {clipboardValue}
        <Button onClick={handleClipboardValue}>COPY</Button>
      </Board>
    </>
  );
}

const Board = styled.pre`
  padding: 0.5rem;
  font-size: 0.5rem;
  font-style: italic;
  color: grey;
  background-color: rgb(40, 44, 52);
  border-radius: 5px;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.4rem;
  border: none;
  color: white;
  font-weight: bolder;
  padding: 0.2rem;
  background: transparent;
  cursor: pointer;
`;
