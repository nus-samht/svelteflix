<script lang="ts">
  import type { MovieListResult } from '$lib/types';
  import { image } from '$lib/api';
  import type { View } from '$lib/views';

  export let movies: MovieListResult[];
  export let view: View;
  export let href: string;
</script>

<h2 class="col-wrapper mt-10 mb-6">
  {view.title}
  {#if href}
    <a {href} class="carousel__cta">see all</a>
  {/if}
</h2>

<div class="flex gap-4 overflow-x-scroll overscroll-x-contain">
  {#each movies as movie}
    <a href="/movie/{movie.id}">
      <img class="max-w-none" alt={movie.title} src={image(movie.poster_path, 500)} />
    </a>
  {/each}
</div>

<style lang="postcss">
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
    @apply w-52;
    scroll-snap-align: start;
  }

  .carousel__cta {
    @apply ml-2 text-2xl underline text-red-700;
  }
</style>
