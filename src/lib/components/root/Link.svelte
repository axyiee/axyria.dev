<script lang="ts">
  import MaterialIcon from "$lib/components/icon/MaterialIcon.svelte";

  export let href: string;
  export let tag: string = "span";
  export let text: string;
</script>

<svelte:element this={tag} class="link-text" aria-hidden="true"
  ><a {href}><MaterialIcon value="link" /></a>{text}</svelte:element
>

<style>
  .link-text {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 8px;
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
