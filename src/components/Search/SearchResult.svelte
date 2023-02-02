<script lang="ts">
  import { fly } from "svelte/transition";

  export let slug: string;
  export let image: string;
  export let title: string;
  export let date: string;
  export let description: string;
  export let tags: string[];
</script>

<a
  class="search-result-entry ui-sound-listener ux-click-effect"
  href={`/blog/posts/${slug}`}
>
  <img class="search-result-entry-image" alt="" src={image} />
  <section class="search-result-entry-metadata">
    <span class="search-result-entry-title">{title}</span>
    <section class="search-result-entry-extra">
      <span class="search-result-entry-date">
        {new Date(date).toLocaleDateString()}</span
      >
      <div class="search-result-entry-extra-sep" />
      <ul class="search-result-entry-tags">
        {#each tags as tag, index}
          <li
            in:fly={{ delay: index * 512 + 512, x: 200 }}
            class="search-result-entry-tags-tag"
          >
            {tag}
          </li>
        {/each}
      </ul>
    </section>
    <p class="search-result-entry-description">{description}</p>
  </section>
</a>

<style>
  .search-result-entry {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60vw;
    gap: 16px;
  }
  .search-result-entry .search-result-entry-image {
    width: 82px;
    height: 82px;
    background: var(--lighter-color);
    border-radius: 10%;
  }
  .search-result-entry-metadata {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .search-result-entry-metadata .search-result-entry-title {
    font-weight: var(--font-heading-weight);
    font-family: var(--font-heading);
    color: var(--text-color);
  }
  .search-result-entry-metadata .search-result-entry-description {
    font-size: 0.9em;
    color: var(--text-secondary-color);
    text-align: justify;
    width: 100%;
    justify-content: space-between;
  }
  .search-result-entry-metadata .search-result-entry-extra {
    display: flex;
    flex-direction: row;
    font-size: 0.75em;
    align-items: center;
    gap: 8px;
  }
  .search-result-entry-metadata .search-result-entry-tags {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  .search-result-entry-metadata
    .search-result-entry-tags
    .search-result-entry-tags-tag {
    list-style-type: none;
    background: var(--tag-lighter-color);
    border-radius: 5px;
    padding: 5px;
  }
  @media only screen and (max-width: 700px) {
    .search-result-entry-metadata .search-result-entry-description {
      width: auto;
    }
    .search-result-entry {
      display: inline-block;
      width: auto;
    }
  }
</style>
