import { Chance } from "chance";
const chance = new Chance();

const data = [
  {
    title: chance.animal({ type: "zoo" }),
    paragraph: chance.paragraph(),
    sentence: chance.sentence({ words: 5 }),
    word: chance.word({ syllables: 3 }).toUpperCase(),
    image: "/assets/kempten.jpg",
  },
  {
    title: chance.animal({ type: "zoo" }),
    paragraph: chance.paragraph(),
    sentence: chance.sentence({ words: 5 }),
    word: chance.word({ syllables: 3 }).toUpperCase(),
    image: chance.avatar({ protocol: "https" }),
  },
  {
    title: chance.animal({ type: "zoo" }),
    paragraph: chance.paragraph(),
    sentence: chance.sentence({ words: 5 }),
    word: chance.word({ syllables: 3 }).toUpperCase(),
    image: chance.avatar({ protocol: "https" }),
  },
  {
    title: chance.animal({ type: "zoo" }),
    paragraph: chance.paragraph(),
    sentence: chance.sentence({ words: 5 }),
    word: chance.word({ syllables: 3 }).toUpperCase(),
    image: chance.avatar({ protocol: "https" }),
  },
];

export default data;
