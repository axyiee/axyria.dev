<script lang="ts">
  import type Post from "$lib/types/post";
  import { fly } from "svelte/transition";

  export let posts: Post[];
</script>

{#if posts.length === 0}
  <h1 transition:fly={{ y: 100, delay: 1250 }}>No posts found.</h1>
{:else}
  <ul>
    {#each posts as post, index}
      {#key post}
        <li
          in:fly={{ y: 100, delay: 500 + 500 * (index + 1) }}
          out:fly={{ y: 100, delay: 500 }}
        >
          <img class="post-image" src={post.image} alt="" />
          <a class="post-title" href="/blog/posts/{post.slug}">{post.title}</a>
          <span class="post-description">{post.description}</span>
          <div class="post-tags">
            {#each post.tags as tag}
              <a href="/blog/tags/{tag}">{tag}</a>
            {/each}
          </div>
        </li>
      {/key}
    {/each}
  </ul>
{/if}

<style lang="scss">
  ul {
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
  ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 2rem;
    background-color: var(--bg-card-color);
    width: 16rem;
    border-radius: 12px;
    transition: all 0.25s var(--bezier-curve);
  }
  ul li:hover {
    transform: scale(1.05);
  }
  .post-image {
    width: 12rem;
    height: 12rem;
    border-radius: 2rem;
  }
  .post-description {
    text-align: justify;
    text-align-last: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }
  .post-title {
    font-size: 2rem;
    font-weight: bold;
    font-family: var(--heading-font-family), var(--fallback-font-stack);
  }
  .post-tags {
    a {
      width: fit-content;
      background-color: var(--bg-contrast-low);
      color: var(--bg-contrast-text-color);
      padding: 5px 10px;
      border-radius: 50px;
    }
    display: flex;
    flex-flow: row wrap;
    margin-top: 0.75rem;
    padding: 0;
    gap: 0.5rem;
    padding: 0;
  }
  a,
  a:visited,
  a:link,
  a:hover,
  a:active {
    color: var(--text-color);
    text-decoration: none;
  }
</style>
