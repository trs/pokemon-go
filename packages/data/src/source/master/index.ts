import {URL} from 'url';
import fetch from 'node-fetch';

import {GAME_MASTER_URL} from '../../const';

export type GameMaster = GameMasterTemplate[];

export interface GameMasterTemplate {
  templateId: string;
  data: any;
}

export async function getGameMaster(): Promise<GameMaster> {
  const url = new URL('master/versions/latest/V2_GAME_MASTER.json', GAME_MASTER_URL);
  const result = await fetch(url.href);
  const gm = await result.json() as {template: GameMaster};
  return gm.template;
}
