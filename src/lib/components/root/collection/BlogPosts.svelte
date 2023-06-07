<script lang="ts">
  import type Post from "$lib/types/post";
  import type LocaleDefinition from "$lib/locale";

  type PostDefinition = { content: any, meta: Post, slug: string };

  export let posts: PostDefinition[];
  export let locale: LocaleDefinition;

  const sorted = posts.sort((a, b) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

 function formatDate(date: string): string {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
</script>

<ol class="blog-posts">
  {#each sorted as post}
    <li>
      <a href={`/blog/posts/${post.slug}`}>📰 {post.meta.title}</a>
      <ul class="row-wrap">
        {#each post.meta.tags as tag}
            <li>{tag}</li>
        {/each}    
        <span>~{post.meta.readingTime} {locale.blog.min} · {formatDate(post.meta.date)}</span>
    </ul>
    </li>
  {/each}
</ol>

<style lang="scss">
    .blog-posts {
        display: flex;
        flex-flow: column wrap;
        list-style: none;
        gap: 1em;
    }
    a {
        color: var(--text-contrast-color);
        font-size: 1.4rem;
        font-weight: bold;
    }
    .row-wrap {
        display: flex;
        flex-flow: row wrap;
        list-style: none;
        align-items: center;
        text-align: center;
        gap: 0.25em;
        li {
            padding: 0.1em 0.75em;
            color: var(--bg-contrast-text-color);
            background-color: var(--bg-contrast-low);
            border-radius: 50em;
        }
        span {
            margin-left: 0.25em;
        }
    }
</style>