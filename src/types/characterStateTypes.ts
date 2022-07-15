export type CharacterStateType = {
  characters: Result[];
  favorites: Result[];
  isLoading: boolean;
  page: number;
  perPage: number;
  total: number;
};

// Todo: Api Response Characters
export type CharacterResponseType = {
  data: Data;
};

type Data = {
  characters: Characters;
};

export type Characters = {
  results: Result[];
  info: Info;
};

type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

export type Result = {
  name: string;
  image: string;
  id: string;
  species: string;
};
