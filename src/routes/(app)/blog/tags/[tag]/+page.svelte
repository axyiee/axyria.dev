<script>
    import Posts from '../../Posts.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Posts posts={data.posts || []} />