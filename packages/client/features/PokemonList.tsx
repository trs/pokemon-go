import React from 'react';
import { useQuery } from '@apollo/client';

import type { Pokemon } from 'common';

import { LIST_POKEMON } from '../query';

export const PokemonListComponent = () => {
  const {data, error, loading} = useQuery<{pokemons: Pokemon[]}>(LIST_POKEMON);

  if (loading) return <p>Loading</p>
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <>
      {data.pokemons.map((pokemon) => {
        return <p key={pokemon.uid}>{pokemon.name} ({pokemon.number})</p>
      })}
    </>
  )
}
