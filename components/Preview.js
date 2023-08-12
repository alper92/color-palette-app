import { useState } from "react";
import { styled } from "styled-components";
import data from "./db/data";
import dataArtpieces from "./db/dataArtpieces";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Preview({ theme }) {
  const [previewElement, setPreviewElement] = useState("Card");

  return (
    <Wrapper theme={theme}>
      <h2>Preview</h2>
      <span>
        <PreviewButton onClick={() => setPreviewElement("Card")}>
          Card
        </PreviewButton>
        <PreviewButton onClick={() => setPreviewElement("Artpieces")}>
          Artpieces
        </PreviewButton>
        <PreviewButton onClick={() => setPreviewElement("Exhibitions")}>
          Exhibitions
        </PreviewButton>
      </span>
      <div></div>
      {previewElement === "Card" && (
        <Card>
          <h3>Title</h3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Paragraph>
          <Button>Button</Button>
          <ButtonHover>Hover Color</ButtonHover>
        </Card>
      )}
      {previewElement === "Artpieces" && (
        <GalleryWrapper>
          {dataArtpieces.map(({ slug, image, name, date }) => (
            <GalleryCard key={slug}>
              <ImageWrapper>
                <StyledImage
                  src={image}
                  alt="image"
                  width={1000}
                  height={1000}
                />
                <Caption>
                  <q>{name}</q>
                  <b>{date}</b>
                </Caption>
              </ImageWrapper>
              <Button>SEE MORE</Button>
            </GalleryCard>
          ))}
        </GalleryWrapper>
      )}
      {previewElement === "Exhibitions" && (
        <ExhibitionsWrapper>
          {dataArtpieces.map(({ word, date, place, sentence, image }) => (
            <Exhibition key={word}>
              <PlaceDate>
                <StyledExhibitionImage src={image} width={60} height={60} />
                {date} @ {place}
                <StyledExhibitionButton>
                  <FontAwesomeIcon icon={faLocationDot} />
                </StyledExhibitionButton>
              </PlaceDate>
            </Exhibition>
          ))}
        </ExhibitionsWrapper>
      )}
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

const GalleryCard = styled.article`
  padding: 1rem;
  background-color: var(--primary);
  height: fit-content;
`;

const ImageWrapper = styled.figure`
  margin-bottom: 1rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Caption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const ExhibitionsWrapper = styled.ul`
  list-style-type: none;
`;

const Exhibition = styled.li`
  width: 100%;
  max-width: 50%;
  margin: 1rem 0;
`;

const StyledExhibitionImage = styled(Image)`
  border-radius: 50%;
  border: 4px solid var(--secondary);
`;

const PlaceDate = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--primary);
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const StyledExhibitionButton = styled.button`
  background: var(--tertiary);
  padding: 0.5rem;
  color: white;
  border-radius: 50%;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
`;
