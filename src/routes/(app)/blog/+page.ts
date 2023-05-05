import type Post from "$lib/types/post.js";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch("/api/blog/posts");
  const posts: Post[] = ((await response.json()) as Post[]).sort(
    (prev, next) =>
      new Date(next.date).valueOf() - new Date(prev.date).valueOf(),
  );
  return { posts };
}
