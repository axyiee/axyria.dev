import type Post from "$lib/types/post.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  if (!params.tag) {
    return;
  }
  const tag = params.tag.toLowerCase();
  const response = await fetch("/api/blog/posts");
  const posts: Post[] = ((await response.json()) as Post[])
    .filter((post) => post.tags.find((t) => t.toLowerCase() === tag))
    .sort(
      (prev, next) =>
        new Date(next.date).valueOf() - new Date(prev.date).valueOf(),
    );
  return { posts };
}
