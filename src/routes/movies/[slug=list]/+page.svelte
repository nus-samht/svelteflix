<script lang="ts">
  import ResultsPage from '$lib/components/ResultsPage.svelte';

  export let data;
</script>

<div class="col-wrapper">
  <h1 class="mb-8">{data.title}</h1>
  <ResultsPage
    movies={data.movies}
    next={data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null}
  />
</div>
