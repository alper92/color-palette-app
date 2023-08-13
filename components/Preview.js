import { useState } from "react";
import { styled } from "styled-components";
import CardPreview from "./CardPreview";
import ArtPiecesPreview from "./ArtPiecesPreview";
import ExhibitionsPreview from "./ExhibitionsPreview";

export default function Preview({ theme }) {
  const [previewElement, setPreviewElement] = useState("Card");

  return (
    <PreviewWrapper theme={theme}>
      <h2>Preview</h2>
      <span>
        <PreviewButton onClick={() => setPreviewElement("Card")}>
          Card
        </PreviewButton>
        <PreviewButton onClick={() => setPreviewElement("Art Pieces")}>
          Art Pieces
        </PreviewButton>
        <PreviewButton onClick={() => setPreviewElement("Exhibitions")}>
          Exhibitions
        </PreviewButton>
      </span>
      <div></div>
      {previewElement === "Card" && <CardPreview />}
      {previewElement === "Art Pieces" && <ArtPiecesPreview />}
      {previewElement === "Exhibitions" && <ExhibitionsPreview />}
    </PreviewWrapper>
  );
}

const PreviewWrapper = styled.section`
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
