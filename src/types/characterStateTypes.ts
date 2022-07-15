export type CharacterStateType = {
  characters: CharacterType[];
  character: CharacterType | null;
  favorites: CharacterType[];
  isLoading: boolean;
  page: number;
  total: number;
};

// Todo: Response Characters
export type CharactersResponseType = {
  characters: CharactersType;
};

export type CharactersType = {
  results: CharacterType[];
  info: Info;
};

type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

// Todo: Character Response

export type CharacterResponseType = {
  character: CharacterType;
};

export type CharacterType = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: Location;
  image: string;
};

type Location = {
  name: string;
};
