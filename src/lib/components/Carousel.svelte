<script lang="ts">
  import type { MovieListResult } from '$lib/types';
  import { image } from '$lib/api';

  export let movies: MovieListResult[];
</script>

<div class="flex gap-4 h-40 overflow-x-scroll overscroll-x-contain">
  {#each movies as movie}
    <a href="/movie/{movie.id}">
      <img class="max-w-none h-full" alt={movie.title} src={image(movie.poster_path, 500)} />
    </a>
  {/each}
</div>

<style>
  div {
    --padding: max(var(--col-padding), calc(var(--col-padding) + (100vw - var(--col-max-w)) / 2));
    scroll-snap-type: x mandatory;
    scroll-padding-left: var(--padding);
    padding: 0 var(--padding);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  img {
    scroll-snap-align: start;
  }
</style>
