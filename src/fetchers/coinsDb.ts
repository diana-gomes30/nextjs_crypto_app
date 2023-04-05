import { CoinDb } from '@interfaces/coins';

export async function postCoinsDb(data: CoinDb) {
  return await fetch('http://localhost:3000/api/coins', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getCoinsDb() {
  const data = await fetch('http://localhost:3000/api/coins', {
    method: 'GET',
  });

  return await data.json();
}

export async function deleteCoinsDb(data: CoinDb) {
  return await fetch(`http://localhost:3000/api/coins/${data.coinId}`, {
    method: 'DELETE',
  });
}

export async function getCoinsWatchlist() {
  const data = await fetch('http://localhost:3000/api/coins/markets', {
    method: 'GET',
  });

  const result = await data.json();
  console.log(result);
  return result;
}
