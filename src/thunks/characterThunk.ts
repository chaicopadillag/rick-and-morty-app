import { gql } from '@apollo/client';
import { apolloClient } from '../apollo-client';
import { setCharacters } from '../slices';
import { AppDispatch } from '../store';
import { CHARACTERS_QUERY } from '../graphql';

export const getCharactersPaginate = (page = 1) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await apolloClient.query({
        query: CHARACTERS_QUERY,
      });

      dispatch(setCharacters(data.characters.results));
    } catch (error) {
      console.log(error);
    }
  };
};
