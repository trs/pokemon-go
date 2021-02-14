
import { gql } from '@apollo/client';

export const LIST_POKEMON = gql`
  query ListPokemon {
    pokemons(limit:1000, sortBy:NUMBER_ASC) {
      uid
      name
      number
      types {
        code
        name
      }
      forms {
        code
        name
      }
    }
  }
`;
