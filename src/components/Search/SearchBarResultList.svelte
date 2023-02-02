<script lang="ts">
  import UxEffects from "@components/UX/UXEffects.svelte";
  import type Post from "@entities/Post";
  import { fade, fly } from "svelte/transition";
  import SearchResult from "./SearchResult.svelte";
  export let results: Post[];
</script>

<div id="search-results-container" in:fade={{ duration: 200 }}>
  <ol id="search-results-list">
    {#each results as { title, slug, description, date, image, tags }, index}
      <li
        class="search-result-entry-wrapper"
        in:fly={{ delay: index * 375 + 375, y: 200 }}
      >
        <SearchResult {title} {slug} {description} {date} {image} {tags} />
      </li>
    {/each}
  </ol>
  <UxEffects query=".search-result-entry" />
</div>

<style>
  ol#search-results-list {
    display: flex;
    flex-direction: column;
    gap: var(--margin);
  }
  .search-result-entry-wrapper {
    list-style-type: none;
    padding-bottom: var(--margin);
    border-bottom: 1px solid var(--separator-color);
  }
  #search-results-container {
    position: absolute;
    top: calc(3em + var(--margin));
    left: calc(var(--margin) * -2);
  }
</style>
