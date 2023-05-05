<script lang="ts">
  import { fly } from "svelte/transition";

  export let title = "";
  let isHovered: boolean = false;
</script>

<div
  on:mouseover={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  on:focus
>
  <slot />
</div>

{#if isHovered}
  <span class="tooltip" transition:fly>{title}</span>
{/if}

<style>
  .tooltip {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 1px #ddd;
    background: var(--bg-contrast-color);
    color: var(--bg-contrast-text-color);
    border-radius: 4px;
    padding: 4px;
    position: absolute;
    left: 10rem;
    pointer-events: none;
    z-index: 2;
  }
</style>
