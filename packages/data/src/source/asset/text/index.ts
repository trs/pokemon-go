import {URL} from 'url';
import fetch from 'node-fetch';

import {ASSETS_URL} from '../../../const';

export type AssetTextMap = Map<string, string>;

export type AssetLanguage = 'english';

export async function getAssetTexts(language: AssetLanguage = 'english'): Promise<AssetTextMap> {
  const url = new URL(`Texts/Latest APK/JSON/i18n_${language}.json`, ASSETS_URL);
  const resp = await fetch(url.href);
  const json = await resp.json() as {data: string[]};

  const map = new Map<string, string>();
  for (let i = 0; i < json.data.length; i++) {
    const key = json.data[i];
    const value = json.data[++i];

    map.set(key, value);
  }

  return map;
}
