<script lang="ts">
  import { image } from '$lib/api';
  import type { MovieListResult } from '$lib/types';

  export let movies: MovieListResult[];
  export let next: string | null;
</script>

<div class="grid grid-cols-4 gap-4">
  {#each movies as movie}
    <a href="/movie/{movie.id}">
      <img alt={movie.title} src={image(movie.poster_path, 500)} />
    </a>
  {/each}
</div>
