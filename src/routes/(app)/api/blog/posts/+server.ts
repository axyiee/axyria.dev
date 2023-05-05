import type Post from "$lib/types/post.js";
import { error, json } from "@sveltejs/kit";

function getPosts(): Post[] {
  const files = import.meta.glob("/src/lib/blog/posts/*.md", { eager: true });
  const posts: Post[] = [];
  Object.keys(files).forEach((name) => {
    const post = files[name];
    const slug = name.substring(name.lastIndexOf("/") + 1, name.indexOf(".md"));
    if (slug && post && typeof post === "object" && "metadata" in post) {
      posts.push({ ...(post.metadata as Post), slug });
    }
  });
  return posts;
}

export function GET() {
  return json(getPosts());
}
