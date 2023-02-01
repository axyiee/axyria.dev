<style>
  #search-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: var(--search-background-color);
    width: 18.75em;
    height: 16px;
    border-radius: 10px;
    position: relative;
  }
  input[type="text"] {
    color: var(--separator-secondary-color);
    width: 18.75em;
    height: 16px;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
  }
  input[type="text"]:focus {
    outline: none;
  }
  #search-area svg {
    color: var(--separator-secondary-color);
    width: 16px;
    height: 16px;
  }
  #search-results-container {
    filter: invert(1);
    padding: 10px;
    width: 100%;
    background: var(--background-color);
    font-family: var(--font-heading);
    border-radius: 20px;
    position: absolute;
    top: 4em;
    left: -0.5em;
    animation: opacity-fade 0.2s ease-in-out;
  }
  #search-results-list .search-result-entry {
    list-style-type: none;
  }
  #search-results-list .search-result-entry .search-result-entry-image {
    filter: invert(1);
    width: 48px;
    height: 48px;
  }
  #search-results-list .search-result-entry {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
  #search-results-list .search-result-entry-metadata .search-result-entry-title {
    font-weight: var(--font-heading-weight);
    color: var(--text-color);
  }
  #search-results-list .search-result-entry-metadata .search-result-entry-description {
    font-size: 0.9em;
    width: 80%;
    color: var(--text-secondary-color);
    text-align: justify;
    justify-content: space-between;
  }
  @media only screen and (max-width: 700px) {
    #search-area, 
    #search-results-container {
      width: 90%;
    }
  }
</style>

<script lang="ts">
  import type Post from "@entities/Post";
  import { fade } from "svelte/transition";

  export let data: Post[];
  let term = "";
  $: results = term ? data.filter((element) =>
        element.title.toLowerCase().includes(term.toLowerCase()) ||
        element.slug.toLowerCase().includes(term.toLowerCase()) ||
        element.description.toLowerCase().includes(term.toLowerCase())) : [];
</script>

<div id="search-area">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    <path d="M21 21l-6 -6"></path>
  </svg>
  <input type="text" placeholder="Search for content..." bind:value={term} />
  {#if results.length > 0}
    <div id="search-results-container" in:fade="{{ duration: 200 }}" out:fade="{{ duration: 200 }}">
      <ol id="search-results-list">
        {#each results as { title, slug, description, date, image }}
        <a href={`/blog/posts/${slug}`}>
          <li class="search-result-entry">
              <img alt="[...]" class="search-result-entry-image" src={image} />
              <section class="search-result-entry-metadata">
                <span class="search-result-entry-title">{title} • {new Date(date).toLocaleDateString()}</span>
                <p class="search-result-entry-description">{description}</p>
              </section>
            </li>
          </a>
        {/each}
      </ol>
    </div>
  {/if}
</div>
