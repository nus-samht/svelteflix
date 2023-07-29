<script>
  import '../styles/app.css';
  import logo from '$lib/images/logo.svg';
  import copyright from '$lib/images/copyright.svg';
</script>

<div class="flex flex-col h-full pt-4">
  <nav class="flex items-center justify-between w-full col-wrapper">
    <a href="/">
      <img src={logo} alt="logo" width="75" />
    </a>
    <div class="flex gap-4 text-red-700 font-semibold">
      <a href="/search">Search</a>
      <a href="/login">Login</a>
    </div>
  </nav>

  <main class="my-16">
    <slot />
  </main>

  <footer class="col-center gap-2 pb-4 mt-auto">
    <p>Data provided by</p>
    <a href="https://www.themoviedb.org/" target="_blank">
      <img src={copyright} alt="copyright" width="150" />
    </a>
  </footer>
</div>
