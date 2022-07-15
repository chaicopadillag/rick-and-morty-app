import { apolloClient } from "../apollo-client";
import {
  setCharacters,
  setFavorites,
  setTotal,
  startLoadingCharacters,
} from "../slices";
import { AppDispatch } from "../store";
import { CHARACTERS_QUERY } from "../graphql";
import { CharactersResponseType, CharacterType } from "../types";

/**
 *
 * @param page {number}
 * @returns
 */
export const getCharactersPaginate = (page = 1) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingCharacters());
    try {
      const { data } = await apolloClient.query<CharactersResponseType>({
        query: CHARACTERS_QUERY,
      });

      const { characters } = data;
      const { results, info } = characters;

      dispatch(setCharacters(results));
      dispatch(setTotal(info.count));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 *
 * @returns {void}
 */
export const getCharactersFavorites = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const favorites: CharacterType[] = JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );

      dispatch(setFavorites(favorites));
    } catch (error) {
      console.log(error);
    }
  };
};
