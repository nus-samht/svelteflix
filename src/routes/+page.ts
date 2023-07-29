import * as api from '$lib/api';
import type { MovieList, MovieDetails } from '$lib/types.d.ts';

const trendingRoute = 'trending/movie/day';
const featuredRoute = 'movie';

export async function load({ fetch }) {
  const trendingMovies = await api.get(fetch, trendingRoute) as MovieList;
  const featuredMovie = await api.get(fetch, `${featuredRoute}/${trendingMovies.results[0].id}`, {
    append_to_response: 'images'
  }) as MovieDetails;

  return {
    trendingMovies,
    featuredMovie
  }
}
