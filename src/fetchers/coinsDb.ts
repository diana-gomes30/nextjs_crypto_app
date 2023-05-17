import { CoinDb } from '@interfaces/coins';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
console.log(`First Url: ${baseUrl}`);

export async function postCoinsDb(data: CoinDb) {
  return await fetch(`${baseUrl}/api/coins`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getCoinsDb() {
  const data = await fetch(`${baseUrl}/api/coins`, {
    method: 'GET',
  });

  return await data.json();
}

export async function deleteCoinsDb(data: CoinDb) {
  console.log(`Url: ${baseUrl}`);
  return await fetch(`${baseUrl}/api/coins/${data.coinId}`, {
    method: 'DELETE',
  });
}

export async function getCoinsWatchlist() {
  const data = await fetch(`${baseUrl}/api/coins/markets`, {
    method: 'GET',
  });

  const result = await data.json();
  console.log(result);
  return result;
}
