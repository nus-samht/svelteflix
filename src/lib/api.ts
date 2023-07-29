export const baseUrl = 'https://api.movies.tastejs.com';
export const baseImageUrl = 'https://image.tmdb.org/t/p';

export async function get(
  fetch: typeof globalThis.fetch,
  endpoint: string,
  params?: Record<string, string>
) {
  const queryString = new URLSearchParams(params)
  const response = await fetch(`${baseUrl}/${endpoint}?${queryString}`);

  return response.json();
}

export function image(file: string, width: number) {
  return `${baseImageUrl}/w${width}${file}`;
}
