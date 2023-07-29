<script lang="ts">
  import Hero from './Hero.svelte';

  export let data;
</script>

<h1 class="mb-10">Top trending movies</h1>
<Hero movie={data.movie} />
