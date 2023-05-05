<script>
  import Header from "$lib/components/root/Header.svelte";
  import Pointer from "$lib/components/root/Pointer.svelte";
  import "./colorSchemes.scss";
  import "./styles.css";

  export let data;
</script>

<svelte:head>
  <title>{data.language.meta.root.title}</title>
  <meta name="description" content={data.language.meta.home.pageDescription} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:image" content="/meme/blink.gif" />
</svelte:head>

<div class="app-root">
  <Header
    locale={data.language.meta}
    transitionDelay={300}
    transitionHeight={100}
  />

  <main>
    <slot />
  </main>

  <!-- <footer>
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer> -->

  <Pointer />
</div>

<style>
  .app-root {
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    gap: 5rem;
  }
</style>
