import {URL} from 'url';
import {MongoClient, MongoError} from 'mongodb';

const url = new URL(process.env.DB_URL);

let client: MongoClient;
export const connectDatabase = async () => {
  if (!client) {
    client = await MongoClient.connect(url.href, {useUnifiedTopology: true});
  }
  return client.db(url.pathname.slice(1));
}

export const closeDatabase = () => client?.close();
