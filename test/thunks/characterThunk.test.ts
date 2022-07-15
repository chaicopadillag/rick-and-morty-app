import {
  setCharacters,
  setFavorites,
  setTotal,
  startLoadingCharacters,
} from "../../src/slices";
import {
  getCharactersFavorites,
  getCharactersPaginate,
} from "../../src/thunks";

describe('Prueba de "characterThunk" ', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de hacer petición graphql e invocar a "startLoadingCharacters"', async () => {
    await getCharactersPaginate()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(startLoadingCharacters());

    expect(dispatch).toHaveBeenCalledWith(setCharacters(expect.any(Array)));

    expect(dispatch).toHaveBeenCalledWith(setTotal(expect.any(Number)));
  });

  test('debe de hacer obtener a los characteres "favorites"', async () => {
    await getCharactersFavorites()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setFavorites(expect.any(Array)));
  });
});
