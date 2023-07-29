import * as api from '$lib/api';
import type { MovieList, MovieDetails } from '$lib/types.d.ts';

export async function load({ fetch }) {
  const [trending, nowPlaying, upcoming] = await Promise.all([
    api.get(fetch, 'trending/movie/day') as Promise<MovieList>,
    api.get(fetch, 'movie/now_playing') as Promise<MovieList>,
    api.get(fetch, 'movie/upcoming') as Promise< MovieList>
  ]);

  const featured = await api.get(fetch, `movie/${trending.results[0].id}`, {
    append_to_response: 'images'
  }) as MovieDetails;

  return {
    trending,
    nowPlaying,
    upcoming,
    featured
  }
}
