<script lang="ts">
  import Hero from './Hero.svelte';
  import Carousel from '$lib/components/Carousel.svelte';

  export let data;
</script>

<Hero movie={data.featuredMovie} />

<Carousel movies={data.trendingMovies.results} />
