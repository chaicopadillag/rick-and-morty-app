import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        image
        species
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query findCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      image
    }
  }
`;
