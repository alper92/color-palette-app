import { Chance } from "chance";

const chance = new Chance();

const dataArtpieces = [
  {
    image: "/assets/kempten.jpg",
    name: chance.sentence({ words: 5 }),
    description: chance.paragraph(),
    category: chance.word({ syllables: 4 }).toUpperCase(),
    date: chance.date({ string: true, american: false }),
    place: chance.address(),
    slug: chance.word({ syllables: 3 }).toUpperCase(),
  },
  {
    image: "/assets/ocean.jpg",
    name: chance.sentence({ words: 4 }),
    description: chance.paragraph(),
    category: chance.word({ syllables: 4 }).toUpperCase(),
    date: chance.date({ string: true, american: false }),
    place: chance.address(),
    word: chance.word({ syllables: 3 }).toUpperCase(),
  },
  {
    image: "/assets/mona_lisa.jpg",
    name: chance.sentence({ words: 4 }),
    description: chance.paragraph(),
    category: chance.word({ syllables: 4 }).toUpperCase(),
    date: chance.date({ string: true, american: false }),
    place: chance.address(),
    word: chance.word({ syllables: 3 }).toUpperCase(),
  },
  {
    image: "/assets/schiffe.jpg",
    name: chance.sentence({ words: 4 }),
    description: chance.paragraph(),
    category: chance.word({ syllables: 4 }).toUpperCase(),
    date: chance.date({ string: true, american: false }),
    place: chance.address(),
    word: chance.word({ syllables: 3 }).toUpperCase(),
  },
  {
    image: "/assets/vang_gogh.jpg",
    name: chance.sentence({ words: 4 }),
    description: chance.paragraph(),
    category: chance.word({ syllables: 4 }).toUpperCase(),
    date: chance.date({ string: true, american: false }),
    place: chance.address(),
    word: chance.word({ syllables: 3 }).toUpperCase(),
  },
  {
    image: "/assets/wald.jpg",
    name: chance.sentence({ words: 4 }),
    description: chance.paragraph(),
    category: chance.word({ syllables: 4 }).toUpperCase(),
    date: chance.date({ string: true, american: false }),
    place: chance.address(),
    word: chance.word({ syllables: 3 }).toUpperCase(),
  },
];

export default dataArtpieces;
