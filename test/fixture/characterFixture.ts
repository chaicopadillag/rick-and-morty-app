import { CharacterStateType, CharacterType } from "../../src/types";

export const initialState: CharacterStateType = {
  characters: [],
  character: null,
  favorites: [],
  isLoading: true,
  page: 1,
  total: 0,
};

export const charactersDemo: CharacterType[] = [
  {
    id: "1",
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
  },
  {
    id: "2",
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
  },
  {
    id: "3",
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Female",
    location: {
      name: "Earth (Replacement Dimension)",
    },
  },
  {
    id: "4",
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Female",
    location: {
      name: "Earth (Replacement Dimension)",
    },
  },
  {
    id: "5",
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Male",
    location: {
      name: "Earth (Replacement Dimension)",
    },
  },
  {
    id: "6",
    name: "Abadango Cluster Princess",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    status: "Alive",
    species: "Alien",
    gender: "Female",
    location: {
      name: "Abadango",
    },
  },
  {
    id: "7",
    name: "Abradolf Lincler",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    status: "unknown",
    species: "Human",
    gender: "Male",
    location: {
      name: "Testicle Monster Dimension",
    },
  },
  {
    id: "8",
    name: "Adjudicator Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    status: "Dead",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
  },
  {
    id: "9",
    name: "Agency Director",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    status: "Dead",
    species: "Human",
    gender: "Male",
    location: {
      name: "Earth (Replacement Dimension)",
    },
  },
  {
    id: "10",
    name: "Alan Rails",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    status: "Dead",
    species: "Human",
    gender: "Male",
    location: {
      name: "Worldender's lair",
    },
  },
];
export const favoritesDemo: CharacterType[] = [
  {
    id: "1",
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
  },
  {
    id: "2",
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    status: "Alive",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
  },
];

export const characterDemo: CharacterType = {
  id: "1",
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Alive",
  species: "Human",
  gender: "Male",
  location: {
    name: "Citadel of Ricks",
  },
};
