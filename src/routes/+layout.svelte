<script>
  import '../styles/app.css';
  import logo from '$lib/images/logo.svg';
  import copyright from '$lib/images/copyright.svg';
</script>

<div class="flex flex-col container h-full pt-4 px-4 sm:px-16 mx-auto">
  <nav class="flex items-center justify-between">
    <a href="/">
      <img src={logo} alt="logo" width="75" />
    </a>
    <div class="flex gap-3 text-red-700 font-semibold">
      <a href="/search">Search</a>
      <a href="/login">Login</a>
    </div>
  </nav>

  <main class="mt-14">
    <slot />
  </main>

  <footer class="col-center gap-2 py-3 mt-auto">
    <p>Data provided by</p>
    <a href="https://www.themoviedb.org/" target="_blank">
      <img src={copyright} alt="copyright" width="150" />
    </a>
  </footer>
</div>
