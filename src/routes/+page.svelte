<script lang="ts">
  import Hero from './Hero.svelte';
  import Carousel from '$lib/components/Carousel.svelte';
  import { views } from '$lib/views';

  export let data;
</script>

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} view={views.trending} href="/movies/trending" />

<Carousel movies={data.nowPlaying.results} view={views.now_playing} href="/movies/now_playing" />

<Carousel movies={data.upcoming.results} view={views.upcoming} href="/movies/upcoming" />
