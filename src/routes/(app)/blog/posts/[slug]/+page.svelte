<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} | Axyria's place</title>
  <meta property="og:type" content="article" />
  <meta name="description" content={data.meta.description} />
</svelte:head>

<div class="blog-post">
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
          <ul class="post-tags">
            {#each data.meta.tags as tag}
              <li>{tag}</li>
              <li>{tag}</li>
              <li>{tag}</li>
            {/each}
          </ul>
        </div>
      </div>
      {#if data.meta.image}
        <img class="post-image" src={data.meta.image} alt="" />
      {/if}
    </div>
  </div>
  <div class="post-content">
    <svelte:component this={data.content} />
  </div>
</div>

<style lang="scss">
  .blog-post {
    .post-content {
      :global(p) {
        margin: 0;
        padding: 0;
      }
      :global(a),
      :global(a:visited),
      :global(a:link),
      :global(a:hover),
      :global(a:active) {
        color: var(--text-color);
        text-decoration: none;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
    display: flex;
    flex-direction: column;
    text-align: left;
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
  :global(h1) {
    font-size: 2.6rem;
  }
  :global(h2) {
    font-size: 2.4rem;
  }
  :global(h3) {
    font-size: 2.05rem;
  }
  :global(h4) {
    font-size: 1.5rem;
  }
</style>
