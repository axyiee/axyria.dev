<script>
  import Animate from "$lib/components/root/Animate.svelte";
  import { fly } from "svelte/transition";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} | Axyria's place</title>
  <meta property="og:type" content="article" />
  <meta name="description" content={data.meta.description} />
</svelte:head>

<Animate>
  <div
    class="blog-post"
    in:fly={{ y: 100, delay: 1000 }}
    out:fly={{ y: 100, delay: 500 }}
  >
    <div class="post-metadata">
      <div class="row justified-between">
        <div>
          <h1 class="post-title">{data.meta.title}</h1>
          <h2 class="post-description">{data.meta.description}</h2>
          <div class="row align">
            <span class="post-date"
              >{new Date(data.meta.date).toLocaleString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}</span
            >
            ·
            <ul class="post-tags">
              {#each data.meta.tags as tag}
                <li><a href="/blog/tags/{tag}">{tag}</a></li>
              {/each}
            </ul>
          </div>
        </div>
        {#if data.meta.image}
          <img class="post-image" src={data.meta.image} alt="" />
        {/if}
      </div>
    </div>
    <article class="post-content">
      <section class="post-content-wrapper">
        <svelte:component this={data.content} />
      </section>
    </article>
  </div>
</Animate>

<style lang="scss">
  .blog-post {
    .post-content {
      :global(p) {
        margin: 0;
        padding: 0;
      }
      &,
      .post-content-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 75%;
        gap: 1rem;
        @media only screen and (max-width: 720px) {
          max-width: 100%;
        }
      }
      align-items: center;
      justify-content: space-between;
      text-align: justify;
      text-align-last: left;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .post-metadata,
  .post-metadata div {
    .row {
      flex-direction: row;
      @media only screen and (max-width: 720px) {
        flex-direction: column-reverse;
        align-items: center;
      }
    }
    .justified-between {
      justify-content: space-between;
    }
    .align {
      align-items: center;
    }
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  .post-tags {
    li {
      background-color: var(--bg-contrast-low);
      color: var(--bg-contrast-text-color);
      text-align: center;
      padding: 5px 10px;
      border-radius: 50px;
    }
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .post-image {
    width: 12rem;
    height: 12rem;
    border-radius: 2rem;
  }
  h1.post-title {
    font-size: 3rem;
  }
  h2.post-description {
    font-size: 1.25rem;
    font-weight: normal;
    font-family: var(--primary-font-family), var(--fallback-font-stack);
    color: var(--text-color-d-2);
  }
  .post-date {
    color: var(--bg-contrast-text-color);
  }
  :global(article h1) {
    font-size: 2.6rem;
  }
  :global(article h2) {
    font-size: 2.4rem;
  }
  :global(article h3) {
    font-size: 2.05rem;
  }
  :global(article h4) {
    font-size: 1.5rem;
  }
  :global(article ol),
  :global(article ul) {
    list-style: inside;
    padding-left: 1.75rem;
  }
  :global(table) {
    :global(tr),
    :global(th),
    :global(td) {
      border: 1px solid var(--bg-contrast-low);
      padding: 0.75em;
    }
    :global(th) {
      color: var(--bg-contrast-text-color);
      font-size: 0.75em;
      text-transform: uppercase;
    }
    display: block;
    overflow-x: auto;
    max-width: 90%;
  }
</style>
