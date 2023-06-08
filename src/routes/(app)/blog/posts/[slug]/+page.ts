import type Post from "$lib/types/post.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  if (!params.slug) {
    return;
  }
  const response = await fetch("/api/blog/posts");
  const posts: Post[] = await response.json();
  const slug = params.slug.toLowerCase();
  const post = posts.find((post) => post.slug.toLowerCase() == slug);
  if (!post) {
    throw error(404, "Not found");
  }
  try {
    const post = await import(`../../../../../lib/blog/posts/${slug}.md`);
    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (_) {
    throw error(404, "Not found");
  }
}
