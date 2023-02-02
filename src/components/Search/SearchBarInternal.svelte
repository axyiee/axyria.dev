<script lang="ts">
  import ArrowLeftIcon from "@components/Icons/ArrowLeftIcon.svelte";
  import MagnifierIcon from "@components/Icons/MagnifierIcon.svelte";
  import SearchBarResultList from "./SearchBarResultList.svelte";
  import type Post from "@entities/Post";

  export let data: Post[];
  let term = "";

  $: expr = term.trim().replace(/  +/g, " ").toLowerCase();
  $: results = expr
    ? data.filter(
        element =>
          element.title.toLowerCase().includes(expr) ||
          element.slug.toLowerCase().includes(expr) ||
          element.description.toLowerCase().includes(expr)
      )
    : [];
  $: shown = results.length > 0;
</script>

{#if shown}
  <style>
    .app-wrapper {
      opacity: 0;
      pointer-events: none;
    }
  </style>
{/if}

<div id="search-bar-wrapper">
  {#if shown}
    <ArrowLeftIcon
      class="search-navigation-back"
      on:click={() => (term = "")}
    />
  {/if}
  <div id="search-area">
    <MagnifierIcon />
    <input type="text" placeholder="Search for content..." bind:value={term} />
    {#if shown}
      <SearchBarResultList {results} />
    {/if}
  </div>
</div>

<style>
  #search-bar-wrapper,
  #search-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  #search-bar-wrapper {
    width: 20em;
  }
  #search-area {
    padding: 16px;
    background-color: var(--search-background-color);
    height: 16px;
    border-radius: 10px;
    position: relative;
    flex: 1;
  }
  input[type="text"] {
    color: var(--separator-secondary-color);
    height: 16px;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
  }
  input[type="text"]:focus {
    outline: none;
  }
  #search-bar-wrapper :global(svg) {
    color: var(--separator-secondary-color);
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
  }
  #search-bar-wrapper :global(svg.search-navigation-back) {
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
  }
  @media only screen and (max-width: 700px) {
    #search-bar-wrapper {
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 90%;
    }
  }
</style>
