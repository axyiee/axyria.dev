<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  function wentRIP() {
    if ($page.status === 404) {
      goto("/");
    }
  }
</script>

<svelte:head>
  <title>Oops! Page not found. | Axyria's place</title>
  <meta
    name="description"
    content="Rest in peace! Well, at least you have this nice-looking page to look at."
  />
</svelte:head>

<svelte:window on:keydown|preventDefault={wentRIP} />

<div id="e404">
  <h1>Error {$page.status}</h1>
  {#if $page.status === 404}
    <p>
      A fatal exception {$page.status} has occurred at C0DE:0x00000045 in 0x000001A4.
      The current request will be terminated.
    </p>
    <p>
      If problems continue, disable remove any newly installed hardware or
      software. Disable BIOS memory options such as caching or shadowing. If you
      need to use Safe Mode to remove or disable components. restart your
      computer. press F8 to select Advanced Startup Options, and then select
      Safe Mode.
    </p>
    <ul>
      <li>Press any key to return to the home page.</li>
      <li>
        Press CTRL+ALT+DEL to restart your computer. You will lose any unsaved
        information in all applications.
      </li>
    </ul>
    <p>Press any key to continue...<span class="blink">█</span></p>
  {:else if $page.error}
    <p>Error message: ${$page.error.message}</p>
  {/if}
</div>

<style>
  @import url("https://fonts.cdnfonts.com/css/perfect-dos-vga-437");

  :global(html:has(#e404)),
  :global(body:has(#e404)) {
    --background-color: #0827f5;
    --scroll-color: blue;
    background-color: var(--background-color);
  }
  :global(body:has(#e404)) {
    --text-color: #ccd6f1;
    color: var(--text-color);
    font-family: "Perfect DOS VGA 437 Win";
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-size: 1.25rem;
  }
  :global(body:has(#e404)),
  #e404 {
    display: flex;
    flex-direction: column;
  }
  #e404 {
    padding: 32px;
    max-width: 60%;
    text-align: left;
    gap: 0.5rem;
    line-height: 1.25;
  }
  :global(html:has(#e404)) :global(::-webkit-scrollbar) {
    width: 12px;
  }
  :global(html:has(#e404)) :global(::-webkit-scrollbar-track) {
    background: transparent;
  }
  :global(html:has(#e404)) :global(::-webkit-scrollbar-thumb) {
    border-radius: 10px;
    background-color: var(--scroll-color);
  }

  #e404 h1 {
    font-size: 1.5rem;
    font-weight: normal;
    background: var(--text-color);
    color: var(--background-color);
    box-shadow: black 8px 8px 0;
    text-transform: uppercase;
    width: fit-content;
    padding: 5px;
  }

  #e404 p {
    padding: 0;
    margin: 0;
  }

  #e404 .blink {
    animation: e404-blink 1s infinite;
  }

  #e404 li::marker {
    content: "* ";
  }

  @keyframes e404-blink {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
