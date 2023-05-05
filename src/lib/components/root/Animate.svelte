<script lang="ts">
  import { onMount } from "svelte";

  let animate: boolean = false;

  type AnimationHook = (setAnimate: (result: boolean) => void) => void;

  function buildHook(hook: AnimationHook) {
    const set = (result: boolean) => (animate = result);
    return hook(set);
  }

  const onpageload: AnimationHook = (setAnimate) =>
    onMount(() => setAnimate(true));

  export let hooks: AnimationHook[] = [onpageload];

  $: hooks.forEach(buildHook);
</script>

{#if animate}
  <slot />
{/if}
