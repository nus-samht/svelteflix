<script lang="ts">
  import { image } from '$lib/api';
  import type { MovieDetails } from '$lib/types';

  export let movie: MovieDetails;

  $: images = movie.images;
  $: backdrop = images.backdrops.find((backdrop) => !backdrop.iso_639_1) || images.backdrops[0];
  $: logo = images.logos.find((logo) => logo.iso_639_1 === 'en') || images.logos[0];
</script>

<div class="col-wrapper">
  <h1 class="mb-8">Top trending movies</h1>

  <a href="/movie/{movie.id}" class="relative">
    <img
      alt={movie.title}
      src={image(backdrop.file_path, 1280)}
      style="aspect-ratio: {backdrop.aspect_ratio};"
    />

    <img
      class="hero__logo absolute bottom-0 left-4 w-1/4 h-full object-contain"
      alt={movie.title}
      src={image(logo.file_path, 1280)}
      style="aspect-ratio: {logo.aspect_ratio};"
    />
  </a>
</div>

<style lang="postcss">
  .hero__logo {
    filter: drop-shadow(0 0 3rem theme(colors.gray.900))
      drop-shadow(0 0 0.5rem theme(colors.gray.900));
    object-position: 0 75%;
  }
</style>
