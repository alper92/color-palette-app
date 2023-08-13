import Image from "next/image";
import { styled } from "styled-components";
import dataArtpieces from "./db/dataArtpieces";
import { uid } from "uid";

export default function ArtPiecesPreview() {
  return (
    <Gallery>
      {dataArtpieces.map(({ slug, image, name, date }) => (
        <GalleryCard key={uid()}>
          <ImageWrapper>
            <StyledImage src={image} alt="image" width={1000} height={1000} />
            <Caption>
              <q>{name}</q>
              <b>{date}</b>
            </Caption>
          </ImageWrapper>
          <Button>DETAILS</Button>
        </GalleryCard>
      ))}
    </Gallery>
  );
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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 4rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
