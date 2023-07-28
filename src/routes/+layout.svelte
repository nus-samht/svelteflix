<script>
  import '../app.css';
  import logo from '$lib/images/logo.svg';
  import copyright from '$lib/images/copyright.svg';
</script>

<div class="relative container h-full mx-auto">
  <nav class="flex items-center justify-between py-3">
    <a href="/">
      <img src={logo} alt="logo" width="100" />
    </a>
    <div class="flex gap-3 text-red-700 font-semibold">
      <a href="/search">Search</a>
      <a href="/login">Login</a>
    </div>
  </nav>
  <main>
    <slot />
  </main>
  <footer class="absolute bottom-0 left-1/2 translate-x-[-50%] py-3 text-center">
    <p class="mb-2">Data provided by</p>
    <a href="https://www.themoviedb.org/" target="_blank">
      <img src={copyright} alt="copyright" width="150" />
    </a>
  </footer>
</div>
