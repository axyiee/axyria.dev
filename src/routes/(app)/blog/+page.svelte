<script>
  import Animate from "$lib/components/root/Animate.svelte";
  import Posts from "./Posts.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Animate>
  <Posts posts={data.posts} />
</Animate>
