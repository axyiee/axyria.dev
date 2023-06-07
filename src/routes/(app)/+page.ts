import type Post from "$lib/types/post";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch("/api/blog/posts");
  const posts: Post[] = await response.json();
  return {
    posts: await Promise.all(
      posts.map(async (post) => {
        const response = await import(`../../lib/blog/posts/${post.slug}.md`);
        return {
          content: response.default,
          meta: response.metadata as Post,
          slug: post.slug
        };
      }),
    ),
  };
}
