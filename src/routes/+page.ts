import * as api from '$lib/api';
import type { MovieList, MovieDetails } from '$lib/types.d.ts';

const trendingRoute = 'trending/movie/day';
const detailRoute = 'movie';

export async function load({ fetch }) {
  const trendingMovies = await api.get(fetch, trendingRoute) as MovieList;
  const movie = await api.get(fetch, `${detailRoute}/${trendingMovies.results[0].id}`, {
    append_to_response: 'images'
  }) as MovieDetails;

  return {
    trendingMovies,
    movie
  }
}
