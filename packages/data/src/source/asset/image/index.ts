import {URL} from 'url';
import fetch from 'node-fetch';

import { ASSETS_URL } from '../../../const';

export interface AssetPokemonIconOptions {
  shiny: boolean;
}

export interface PokemonIconResponse {
  body: NodeJS.ReadableStream,
  contentType: string
}

export async function getAssetPokemonIcon(assetId: string, options: AssetPokemonIconOptions): Promise<PokemonIconResponse> {
  const url = new URL(`master/Images/Pokemon/pokemon_icon_${assetId}${options.shiny ? '_shiny' : ''}.png`, ASSETS_URL);
  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const contentType = response.headers.get('content-type');
    return {
      body: response.body,
      contentType
    };
  } catch (err) {
    console.debug(err.message, url.href);
    throw err;
  }
}
