export const baseUrl = 'https://api.movies.tastejs.com';
export async function get(
  fetch: typeof globalThis.fetch,
  endpoint: string,
  params?: Record<string, string>
) {
  const queryString = new URLSearchParams(params)
  const response = await fetch(`${baseUrl}/${endpoint}?${queryString}`);

  return response.json();
}
