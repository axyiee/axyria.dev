<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<ul>
  {#each data.posts as post}
    <li>
      <img class="post-image" src={post.image} alt="" />
      <a class="post-title" href="/blog/posts/{post.slug}">{post.title}</a>
      <span class="post-description">{post.description}</span>
      <ul class="post-tags">
        {#each post.tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

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
    background-color: var(--background-color-d-2);
    width: 16rem;
    border-radius: 12px;
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
    li {
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
