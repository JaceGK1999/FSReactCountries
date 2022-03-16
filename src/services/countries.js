import { client, checkError } from './client';

export async function fetchCountries() {
  const resp = await client.from('countries').select('*');
  console.log(resp, 'resp');
  return checkError(resp);
}
