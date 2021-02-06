import {paramCase} from 'change-case';
import {writeFile, mkdir} from 'fs/promises';
import {createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {promisify} from 'util';

const pipelineAsync = promisify(pipeline);

import {getGameMaster} from './source/master';
import {getAssetTexts} from './source/asset/text';
import { getAssetPokemonIcon,  } from './source/asset/image';
import {getAssetPokemonNames, getAssetPokemonTypeNames} from './source/asset/text/types';
import {formatPokemon} from './formatter/pokemon';

import type {PokemonMaster} from './formatter/pokemon';
import type {PokemonIconResponse} from './source/asset/image';

function generatePokemon(pokemonNamesAssetMap, pokemonTypeNamesAssetMap, pokemon: PokemonMaster) {
  const nameAsset = pokemonNamesAssetMap.get(pokemon.number);
  const name = nameAsset
    ? nameAsset.name
    : pokemon.uniqueId; // TODO convert into usable name

  const id = paramCase([
    pokemon.number,
    ...pokemon.forms.map(({code}) => code).filter((form) => form !== 'normal')
  ].join('-'));

  const types = pokemon.types.map((templateId) => pokemonTypeNamesAssetMap.get(templateId)!.name);

  return {
    id,
    name,
    number: pokemon.number,
    forms: pokemon.forms,
    types
  };
}

async function downloadFile(fn: () => Promise<PokemonIconResponse>, destination: string) {
  try {
    const response = await fn();
    await pipelineAsync(response.body, createWriteStream(destination, {autoClose: true, emitClose: true}));
  } catch (err) {
    // console.error(err.message);
  }
}

// async function generateDefenderType(pokemonTypeNamesAssetMap, type: PokemonMasterTypeDefend) {
//   const typeNames = type.templateId.map((templateId) => pokemonTypeNamesAssetMap.get(templateId)!.name);
//   const defendEffectiveness = type.defendScalar.map((eff) => {
//     return {
//       types: eff.templateId.map((templateId) => pokemonTypeNamesAssetMap.get(templateId)!.name),
//       value: eff.value,
//       grade:
//         eff.value === 2.56 ? 6
//         : eff.value === 1.6 ? 5
//         : eff.value === 1 ? 4
//         : eff.value === 0.625 ? 3
//         : eff.value === 0.390625 ? 2
//         : eff.value === 0.244141 ? 1
//         : 0
//     };
//   });

//   const name = typeNames.join(',').toLocaleLowerCase();

//   return {
//     name,
//     types: typeNames,
//     defendEffectiveness
//   };
// }

void async function generate() {
  const POKEMON_OUT_DIR = `${__dirname}/../gen/pkmn`;
  const IMAGE_OUT_DIR = `${__dirname}/../gen/img`;
  const IMAGE_SHINY_OUT_DIR = `${__dirname}/../gen/img/shiny`;

  const [gm, textAssets] = await Promise.all([
    getGameMaster(),
    getAssetTexts(),
    mkdir(POKEMON_OUT_DIR, {recursive: true}).catch(() => void 0),
    mkdir(IMAGE_OUT_DIR, {recursive: true}).catch(() => void 0),
    mkdir(IMAGE_SHINY_OUT_DIR, {recursive: true}).catch(() => void 0)
  ]);

  const [pokemonNamesAssetMap, pokemonTypeNamesAssetMap] = await Promise.all([
    getAssetPokemonNames(textAssets),
    getAssetPokemonTypeNames(textAssets)
  ]);

  const promises: Promise<any>[] = [];
  for await (const rawPokemon of formatPokemon(gm)) {
    promises.push((async () => {
      const formattedPokemon = generatePokemon(pokemonNamesAssetMap, pokemonTypeNamesAssetMap, rawPokemon);

      await Promise.all([
        writeFile(`${POKEMON_OUT_DIR}/${formattedPokemon.id}.json`, JSON.stringify(formattedPokemon, null, 2)),
        downloadFile(() => getAssetPokemonIcon(rawPokemon.assetId, {shiny: false}), `${IMAGE_OUT_DIR}/${formattedPokemon.id}.png`),
        downloadFile(() => getAssetPokemonIcon(rawPokemon.assetId, {shiny: true}), `${IMAGE_SHINY_OUT_DIR}/${formattedPokemon.id}.png`),
      ]);
    })());
  }

  // for (const type of getDefenderTypeEffectiveness(gm)) {
  //   promises.push(generateDefenderType(pokemonTypeNamesAssetMap, type));
  // }

  await Promise.all(promises);
}();
