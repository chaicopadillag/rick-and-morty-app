import { AnyAction } from "@reduxjs/toolkit";
import {
  characterSlice,
  clearCharacter,
  setCharacter,
  setCharacters,
  setFavorites,
} from "../../src/slices";
import {
  characterDemo,
  charactersDemo,
  favoritesDemo,
  initialState,
} from "../fixture/characterFixture";

describe("Pruebas a characterSlice", () => {
  test('debe de regresar el estado inical y llamarse "character"', () => {
    const state = characterSlice.reducer(initialState, {} as AnyAction);

    expect(characterSlice.name).toBe("character");
    expect(state).toEqual(initialState);
  });

  test('debe de setear la lista de "characters" en el Redux', () => {
    const { characters } = characterSlice.reducer(
      initialState,
      setCharacters(charactersDemo)
    );
    expect(characters).toEqual(charactersDemo);
  });

  test('debe de setear una "character" en el Redux', () => {
    const { character } = characterSlice.reducer(
      initialState,
      setCharacter(characterDemo)
    );
    expect(character).toEqual(characterDemo);
  });

  test('debe de resetear al "character" a null en el Redux', () => {
    const { character } = characterSlice.reducer(
      initialState,
      clearCharacter()
    );
    expect(character).toEqual(null);
  });

  test('debe de setear la lista "favorites" en el Redux', () => {
    const { favorites } = characterSlice.reducer(
      initialState,
      setFavorites(favoritesDemo)
    );
    expect(favorites).toEqual(favoritesDemo);
  });
});
