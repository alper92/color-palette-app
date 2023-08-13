import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import dataArtpieces from "./db/dataArtpieces";
import { styled } from "styled-components";
import Image from "next/image";
import { uid } from "uid";

export default function ExhibitionsPreview() {
  return (
    <Exhibitions>
      {dataArtpieces.map(({ date, place, image, name }) => (
        <Exhibition key={uid()}>
          <PlaceDate>
            <StyledExhibitionImage
              src={image}
              width={60}
              height={60}
              alt={name}
            />
            {date} @ {place}
            <StyledExhibitionButton>
              <FontAwesomeIcon icon={faLocationDot} />
            </StyledExhibitionButton>
          </PlaceDate>
        </Exhibition>
      ))}
    </Exhibitions>
  );
}

const Exhibitions = styled.ul`
  list-style-type: none;
  width: 100%;
  max-width: 390px;
`;

const Exhibition = styled.li`
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
  background: none;
  padding: 0.5rem;
  color: var(--tertiary);
  border-radius: 50%;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
`;
